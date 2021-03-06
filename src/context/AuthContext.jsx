import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../js/firebase-config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function logUserIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        localStorage("isLoggedIn", true);
      })
      .catch((error) => {
        throw error;
      });
  }

  async function signUserOut() {
    await signOut(auth).catch((error) => {
      throw error;
    });
    localStorage.clear();
  }

  async function signUserUp(name, email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then(() => {
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((error) => {
        throw error;
      });
  }

  function getUser() {
    return currentUser;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem("isLoggedIn", true);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    getUser,
    logUserIn,
    signUserOut,
    signUserUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
