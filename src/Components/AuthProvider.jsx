import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
 export  const AuthContext=createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSinOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
  const createNewUser = (email, password) => {
    setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unsubscribe()
    }

  },[])
  const authInfo = {
    user,
    loading,
    createNewUser,
    singInUser,
    handleSinOut
  }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;