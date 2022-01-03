import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseInitialize from '../../firebase/firebaseInitialize';


firebaseInitialize();
const UseFirebase = () => {
  const [user,setUser] = useState({})
  const [error,setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  // Google
  const handleGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, provider)
    .finally(() => setIsLoading(false))
}
  // registerUser section
  const register =(email, password)=>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(()=> setIsLoading(false));
  }
  // signIn With Email And Password
  const loginUser = (email, password)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    setError('')
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(()=> setIsLoading(false));
  }

  // onAuthStateChanged section
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
},[])

  // LogOut section
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
        setUser({})
    }).catch((error) => {
        
    })
    .finally(() => setIsLoading(false))
  }
  return {
    handleGoogle,user,error,setUser,setError,logOut,isLoading,register,loginUser,
  };
};

export default UseFirebase;