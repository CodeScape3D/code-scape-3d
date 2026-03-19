// Authentication service — wraps Firebase Auth methods
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const googleProvider = new GoogleAuthProvider();

/**
 * Opens a Google sign-in popup and returns a normalized user object.
 * @returns {{ uid, email, displayName, photoURL }}
 */
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const { uid, email, displayName, photoURL } = result.user;
  return { uid, email, displayName, photoURL };
};

/**
 * Signs the current user out.
 */
export const logout = () => signOut(auth);

/**
 * Returns the currently authenticated user, or null.
 * @returns {import('firebase/auth').User | null}
 */
export const getCurrentUser = () => auth.currentUser;

/**
 * Subscribes to authentication state changes.
 * @param {(user: import('firebase/auth').User | null) => void} callback
 * @returns {() => void} Unsubscribe function
 */
export const onAuthStateChanged = callback =>
  firebaseOnAuthStateChanged(auth, callback);
