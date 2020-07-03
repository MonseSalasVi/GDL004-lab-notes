import React from 'react';
import firebase from '../firebase/firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    fontFamily: ' Poppins, sans-serif',
    position: 'relative',
    //position: 'absolute',
    width: '80%',
    height: 'auto',
    background:'linear-gradient(#553772,#c7417b);',
    padding: theme.spacing(1),
    borderRadius: '5px',
  },
  btn:{
    color:'rgb(243,216,228, 0.7)',
    '&:hover': {
      color: "#c7417b"
    }, 
  },
  headerModal:{
    display: 'felx',
    justifyContent:'flexEnd',
  },
  newNote:{
    fontFamily: ' Poppins, sans-serif',
    width: '90%',
    height: '7rem',
    borderRadius: '5px',
    border: 'none',
    background: 'rgb(243,216,228, 0.7)',
    color: '#553772',
    fontSize:'20px'
  },
  btnedit:{
    marginTop:'1rem',
    color: '#1f306e',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:hover': {
      backgroundColor: '#1f306e',
      color: "#c7417b"
    }, 

  }
}));

const NoteBtn = ({ note }) => {
  const classes = useStyles();
  const [text, setText] = React.useState(note.text);


  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('Note')
      .doc(note.id)
      .set({ ...note, text })
      .then((result) => {
        handleClose()
      })
      .catch((err) => {});
  };
  const onDelete = () => {
    const response = window.confirm('Are you sure?');
    if (response) {
      const db = firebase.firestore();
    db.collection('Note').doc(note.id).delete();
    }
  }


  //Modal
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <div style={{display: "flex", justifyContent: "space-between"}}> 
    <p>Edit </p>
    <Button onClick={handleClose}> <HighlightOffIcon/> </Button> 
    
    </div>
      <textarea
        className={classes.newNote}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button className={classes.btnedit} onClick={onUpdate}> Save </Button>
    </div>
  );

  return (
    <div >
      <div >
        <Button className={classes.btn} onClick={handleOpen}>
         
          <EditIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          //aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'>
          {body}
        </Modal>

        <Button className={classes.btn} onClick={onDelete}>
          
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default NoteBtn;
