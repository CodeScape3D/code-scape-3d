// Firestore service — persists user data and activity tracking
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

/**
 * Creates or updates the user document in the 'usuarios' collection.
 * On each login, calculates the duration of the PREVIOUS session
 * (ultimaActividad - fechaUltimoLogin) and saves it in 'sesiones'.
 * @param {{ uid, email, displayName, photoURL }} user
 */
export const saveUserData = async user => {
  const userRef = doc(db, 'usuarios', user.uid);

  // Read existing user data
  const snapshot = await getDoc(userRef);
  const isFirstLogin = !snapshot.exists();

  if (!isFirstLogin) {
    const data = snapshot.data();
    const fechaUltimoLogin = data.fechaUltimoLogin;
    const ultimaActividad = data.ultimaActividad;

    // Calculate previous session duration
    if (fechaUltimoLogin && ultimaActividad) {
      const loginMs =
        fechaUltimoLogin instanceof Timestamp
          ? fechaUltimoLogin.toMillis()
          : fechaUltimoLogin;
      const actividadMs =
        ultimaActividad instanceof Timestamp
          ? ultimaActividad.toMillis()
          : ultimaActividad;

      const duracionSegundos = Math.round((actividadMs - loginMs) / 1000);

      if (duracionSegundos >= 10) {
        await addDoc(collection(db, 'sesiones'), {
          usuarioID: user.uid,
          nombre: user.displayName ?? 'Anónimo',
          fechaInicio: fechaUltimoLogin,
          fechaFin: ultimaActividad,
          duracionSegundos,
          timestamp: serverTimestamp(),
        });
      }
    }
  }

  const now = serverTimestamp();

  await setDoc(
    userRef,
    {
      nombre: user.displayName ?? '',
      email: user.email ?? '',
      photoURL: user.photoURL ?? '',
      // fechaPrimerLogin: solo se escribe si es la primera vez
      ...(isFirstLogin && { fechaPrimerLogin: now }),
      // fechaUltimoLogin: se actualiza en cada login
      fechaUltimoLogin: now,
      // ultimaActividad: empieza igual al login, se actualiza con cada actividad
      ultimaActividad: now,
    },
    { merge: true }
  );
};

/**
 * Records a user activity in the 'actividades' collection.
 * @param {string} usuarioID
 * @param {string} nombre  — Display name of the user
 * @param {'tema_abierto'|'ejercicio_completado'|'pagina_visitada'} tipo
 * @param {string} contenido  — Topic name, page path, etc.
 * @param {number} [duracionSegundos]  — Optional duration in seconds
 */
export const trackActivity = async (
  usuarioID,
  nombre,
  tipo,
  contenido,
  duracionSegundos,
  botones = []
) => {
  const actividadData = {
    usuarioID,
    nombre: nombre ?? 'Anónimo',
    tipo,
    contenido,
    timestamp: serverTimestamp(),
  };

  if (duracionSegundos !== undefined && duracionSegundos !== null) {
    actividadData.duracionSegundos = duracionSegundos;
  }

  if (botones.length > 0) {
    actividadData.botones = botones;
  }

  // Guardar actividad y actualizar ultimaActividad del usuario en paralelo
  await Promise.all([
    addDoc(collection(db, 'actividades'), actividadData),
    setDoc(
      doc(db, 'usuarios', usuarioID),
      { ultimaActividad: serverTimestamp() },
      { merge: true }
    ),
  ]);
};

/**
 * Retrieves all activities for a given user, ordered by most recent first.
 * @param {string} usuarioID
 * @returns {Promise<Array>}
 */
export const getUserActivities = async usuarioID => {
  const q = query(
    collection(db, 'actividades'),
    where('usuarioID', '==', usuarioID)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(docSnap => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};
