import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';
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

      // put it in the right place
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios.post('http://localhost:3000/jwt', user,{withCredentials:true})
          .then(res => {
            console.log('logIn',res.data)
            setLoading(false)

          })
      }
      else {
        axios.post('http://localhost:3000/logOut', {}, { withCredentials: true })
        .then(res => {
          console.log('logout ',res.data)
          setLoading(false)
        })
      }
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