// useAuth — custom hook that exposes auth state and actions throughout the app
import { useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  loginWithGoogle as loginWithGoogleService,
  logout as logoutService,
} from '../services/authService';
import { saveUserData } from '../services/firestoreService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginTime, setLoginTime] = useState(null); // timestamp del login actual

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async firebaseUser => {
      if (firebaseUser) {
        const normalizedUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        };
        setUser(normalizedUser);
      } else {
        setUser(null);
        setLoginTime(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const userData = await loginWithGoogleService();
      await saveUserData(userData);
      setLoginTime(Date.now()); // guardar momento exacto del login
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await logoutService();
  };

  return { user, loading, loginTime, loginWithGoogle, logout };
};

export default useAuth;
