import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../components/firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app); // Initialize Firebase Auth

  const createNewUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  // State to manage user data
  const [user, setUser] = useState(null);

  // Context value to share
  const authInfo = {
    user,
    setUser,
    auth, // Share auth instance if needed
    createNewUser,
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
    })
    return ()=>{
        unSubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
