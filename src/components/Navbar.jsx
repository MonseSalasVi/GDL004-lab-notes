import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import app from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  color:{
    color: "white",
    background: "rgb(31 , 48, 110, 0.7)"
  },
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 2,
  },
  btn:{  
    color: '#f5487f',
    '&:hover': {
      background: 'rgb(226,157,187, 0.2)',
    }, 
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const currentUser = app.auth().currentUser;

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.color}>
        <Toolbar>
          <Typography variant='subtitle1' className={classes.title}>
             {currentUser.email}
          </Typography>
          <Button  className={classes.btn} onClick={() => app.auth().signOut()} >Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}