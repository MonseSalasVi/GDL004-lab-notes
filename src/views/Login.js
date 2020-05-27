import React, { useState, useContext } from 'react';
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';
import AuthContext from '../Components/AuthContext';
import Header from '../Components/Header';
import './login.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) Auth.setLoggedIn(true);
            history.push('/Home');
          })
          .catch((e) => {
            setErrors(e.message);
          });
      });
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
          .then((result) => {
            if (result.user) Auth.setLoggedIn(true);
            history.push('/Home');
          })
          .catch((e) => setErrors(e.message));
      });
  };

  return (
    <div className='Join'>
      <h1> Login </h1>{' '}
      <form onSubmit={(e) => handleForm(e)}>
        <TextField
          id='standard-basic'
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          type='email'
        />
        <TextField
          id='standard-basic'
          label='Password'
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          value={password}
          type='password'
        />
        <div className='espacio'></div>
        <div>
          <Button
            variant='outlined'
            onClick={() => signInWithGoogle()}
            className='googleBtn'
            type='button'
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='logo'
            />
            Login With Google
          </Button>
          <div className='espacio'></div>
          <Button variant='outlined' color='lightBlue' type='submit'>
            {' '}
            Login{' '}
          </Button>{' '}
          <span> {error} </span>
        </div>
      </form>
      <Header />
    </div>
  );
};

export default withRouter(Login);
