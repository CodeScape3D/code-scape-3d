import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnyPUSrUns1DVPAgSNPYJScOlTLfR-ayM",
  authDomain: "code-scape-3d.firebaseapp.com",
  projectId: "code-scape-3d",
  storageBucket: "code-scape-3d.appspot.com",
  messagingSenderId: "650278237463",
  appId: "1:650278237463:web:6941ae74e8073cf613b352"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);