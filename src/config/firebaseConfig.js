// Firebase configuration and initialization
// Credentials are stored in environment variables (.env) — never hardcode them.
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// SESSION persistence: user is logged out when the tab/browser is closed
setPersistence(auth, browserSessionPersistence);

// Firestore instance
export const db = getFirestore(app);

// Firebase Analytics (only in browsers that support it)
export let analytics = null;
isSupported().then(supported => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export default app;
