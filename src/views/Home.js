import React from 'react';
import { Redirect } from "react-router-dom"
import firebase from '../firebase/firebase';
import 'firebase/firestore';
import app from '../firebase/firebase';
import '../index.css';
//material
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Navbar from '../components/Navbar.jsx';
import NoteBtn from '../components/NoteBtn.js';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    },
  },
  containerNewNote: {
    width: '50%',
    height: '35rem',
    //border: 'solid 1px white',
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '95%',
      height: '10rem',
    },
    
  },
  containerNote: {
    width: '50%',
    height: '35rem',
    //border: 'solid 1px black',
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    overflow: 'scroll',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '95%',
      height: '20rem',
      overflow: 'scroll'
    },
  },
  newNote:{
    fontFamily: ' Poppins, sans-serif',
    width: '90%',
    height: '80%',
    borderRadius: '5px',
    border: 'none',
    background: 'rgb(243,216,228, 0.7)',
    color: '#553772',
    fontSize:'20px'
  },
  btn:{  
    marginTop:'1rem',
    color: '#1f306e',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:hover': {
      backgroundColor: '#1f306e',
      color: "#c7417b"
    }, 
  },
  note: {
    color: 'rgba(225,225,225,0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'solid 1px #543c52',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '0.3rem',
    background: 'rgba(31,48,110,0.8)',
    width: '90%',
    height: '4rem', 
    padding: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();
  const [notes, setNotes] = React.useState([]);
  const [newNote, setNewNote] = React.useState();
  const currentUser = app.auth().currentUser;


  React.useEffect(() => {
    const db = firebase.firestore();
    if (currentUser) {
      const unsubscribe = db
        .collection('Note')
        .where('user', '==', currentUser.email)
        .onSnapshot((snapshot) => {
          const data = [];
          snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
          setNotes(data);
        });
      return unsubscribe;
    } else {
      return <Redirect to='/Login' />;
    }
  }, [currentUser]);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('Note')
      .add({ text: newNote, user: currentUser.email })
      .then((result) => {
        setNewNote("")
      })
      .catch((err) => { 
        console.log('error al crear')
      });    
  };

  return (
    <>
      <Navbar />

      <div className={classes.container}>
        <div className={classes.containerNewNote}>
          {/* <p> NEW NOTE</p>         */}
          <textarea
           placeHolder='   New note...'
            className={classes.newNote}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <Button className={classes.btn} onClick={onCreate}>Create </Button>
        </div>

        <div className={classes.containerNote}>
          {/* <p> MY NOTES</p> */}
          {notes.map((note) => (
            <div className={classes.note} key={note.id}>
              {note.text}
              <NoteBtn key={note.id} note={note} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
