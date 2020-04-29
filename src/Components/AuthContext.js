import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

const AuthContext = React.createContext(null);

export default AuthContext;

export function AuthContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setLoading(false)
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
    {loading
        ? <>Loading...</>
        : children}
    </AuthContext.Provider>
  );
}
