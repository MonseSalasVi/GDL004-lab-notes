import React, { useState, useContext } from "react";
import { AuthContext } from "../index";
import * as firebase from 'firebase/app'

import { withRouter } from 'react-router-dom';
import Header from '../Header'
const Join = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      .then(res => {

        if (res.user) Auth.setLoggedIn(true);
        console.log(res)
        history.push('/reports')
      })
      .catch(e => {
        setErrors(e.message);
      });
      })
      
  };
  const handleGoogleLogin = e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          if (result.user) Auth.setLoggedIn(true);
          history.push('/reports')        
        })
        .catch(e => setErrors(e.message))
      })
  }

  return (
    
    <div className='Join'>
    <Header/>
      <h1>Form Account</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <hr />
        <button onClick={() => handleGoogleLogin()} className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Register With Google
        </button>

        <button type="submit">Login</button>

        <span>{error}</span>
      </form>
    </div>
  );
};

export default withRouter(Join);