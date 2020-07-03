import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../firebase/firebase.js';
import firebase from 'firebase/app';

//material
import '../index.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  title: {
    display:"flex",
    flexDirection: "column",
    alignItems: 'center',
    fontSize: '2em',
    color: 'black',
  },
  form:{
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    "& > *": {
			margin: theme.spacing(1),
      width: "20em",
			"& label.Mui-focused": {
				color: "#1f306e",
			},
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
          borderColor: "#1f306e",
          background:'transparent',
				},
				"&:hover fieldset": {
          borderColor: "#1f306e",
          background:'transparent',
				},
				"&.Mui-focused fieldset": {
          borderColor: "#1f306e",
          background:'transparent',
				},
      },
    },
  },
  btn: {
    backgroundColor: '#1f306e',
    color: 'white',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:hover': {
      background: 'white',
      color: '#1f306e',
    }, 
  },
  img :{
    width: '7%',
    height: '7%',
    margin: '0 5px',
    verticalAlign: 'middle'
},
back:{
  marginTop:'3rem',
     '&:hover': {
      background: '#8f3b76',
      color: 'black',
    }, 
}
}));

const SignUp = ({ history }) => {
  const classes = useStyles();
  const handleSingUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        
      }
    },
    [history]
  );

  function handleClick() {
    history.push('./Login');
  }

  const signUpWithGoogle = () => {
    console.log('crear cuenta con google');
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            history.push('/');
          })
          .catch((e) => console.log(e));
      });
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <div className={classes.title}> 
      <h1 > Sign Up </h1>
      <PersonAddIcon style={{fontSize: 70}}/>
    </div>
      <form onSubmit={handleSingUp} className={classes.form}>
        <div className='espacio'></div>
        <TextField
          label='Email'
          name='email'
          type='email'
          variant="outlined"
        />
        <div className='espacio'></div>
        <TextField
          label='Password'
          name='password'
          type='password'
          variant="outlined"
        />
        <div className='espacio'></div>
        <Button type='submit' variant='contained' className={classes.btn}>
          Sign up
        </Button>
        <Button
        type='submit'
        variant='contained'
        className={classes.btn}
        onClick={() => signUpWithGoogle()}>
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            alt='logo'
            className={classes.img}
          />
        Sign Up with google
      </Button>
      </form>
     
      <Button type='button' onClick={handleClick} className={classes.back}>
       <ArrowBackIosIcon/> 
        Back to Log in
      </Button>
    </Grid>
  );
};

export default withRouter(SignUp);
