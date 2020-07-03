import React, { useEffect, useState } from "react";
import app from "../firebase/firebase";
import { makeStyles } from '@material-ui/core/styles';

export const AuthContext = React.createContext();

const useStyles = makeStyles({
  loading: {
    display:"flex",
    flexDirection: "column",
    alignItems: 'center',
    fontSize: '2em',
    color: 'white',
    opacity:'0.6',
    marginTop:'3rem',
  },
});

export const AuthProvider = ({ children }) => {
  const classes = useStyles();
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
        setPending(false)
        });

    },[]);

    if(pending) {
      return <div className={classes.loading}> Loading... </div>
    }

    return(
        <AuthContext.Provider
        value={{
          currentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
};