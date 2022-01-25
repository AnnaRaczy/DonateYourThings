// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const auth = getAuth();
//   const [currentUser, setCurrentUser] = useState();

//   async function logUserIn(email, password) {
//     await signInWithEmailAndPassword(auth, email, password).catch((error) => {
//       throw error;
//     });
//   }

//   async function logUserInWithGoogle() {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     await signInWithPopup(auth, provider).catch((error) => {
//       throw error;
//     });
//   }

//   async function signUserOut() {
//     const auth = getAuth();
//     await signOut(auth).catch((error) => {
//       throw error;
//     });
//   }

//   async function signUserUp(name, email, password) {
//     const auth = getAuth();
//     await createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         updateProfile(auth.currentUser, {
//           displayName: name,
//         });
//       })
//       .catch((error) => {
//         throw error;
//       });
//   }

//   function getUser() {
//     return currentUser;
//   }

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     getUser,
//     logUserIn,
//     logUserInWithGoogle,
//     signUserOut,
//     signUserUp,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
