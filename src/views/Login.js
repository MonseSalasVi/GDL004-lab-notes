import React, { useState, useContext } from "react";
import * as firebase from 'firebase/app'
import { withRouter } from 'react-router-dom'
import AuthContext from '../Components/AuthContext';
import Header from '../Components/Header'
const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();

    firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) Auth.setLoggedIn(true);
          history.push('/Home')
        })
        .catch(e => {
          setErrors(e.message);
        });
      })
  
  };

  const signInWithGoogle = () => {
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
        history.push('/Home')
      })
      .catch(e => setErrors(e.message))
    })
   
  }
  return (
    <div className='Join'>
    
      <h1>Login</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="EMAIL"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="PASSWORD"
        />
        <hr />
        <button onClick={() => signInWithGoogle()} className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
        <button type="submit">Login</button>
        <span>{error}</span>
      </form>
      <Header/>
    </div>
  );
};

export default withRouter(Login);