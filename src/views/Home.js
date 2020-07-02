import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Note from '../Components/Note';
import NoteForm from '../Components/Noteform';
import Box from '@material-ui/core/Box';
import Navbar from '../Components/Navbar';
import ListItem from '@material-ui/core/ListItem';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        // userEmail= '',
        // noteContent= '',
        // docid = '',
      ],
    };
    //this.addNote = this.addNote.bind(this)

    this.notesCollection = firebase.firestore().collection('notes');
    this.currentUser = firebase.auth().currentUser;
  }

  dataCollection = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot((querySnapshot) => {
        const newArrayNote = [];

        querySnapshot.forEach((doc) => {
          //console.log(doc.data());
          newArrayNote.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        this.setState({
          notes: newArrayNote,
        });
      });
  };

  componentDidMount() {
    console.log('didmount');
    this.dataCollection();
  }
  deletePost = (noteid) => {
    console.log('quiero borrar esto desde home', noteid);
  };
  removeNote = (noteid) => {
    console.log('k pasa', noteid);
    // const response = window.confirm('Are you sure?');
    // if (response) {
    //   //removeNote(id);
    //   console.log(this.noteid);
    // }
    // this.notesCollection.doc(noteid).delete();
  };

  addNote = (note) => {
    //let {notes} = this.state;
    this.notesCollection
      .add({
        userEmail: this.currentUser.email,
        noteContent: note,
      })
      .then((result) => {
        //console.log('created', note, result);
      })
      .catch((err) => {});
  };

  render() {
    //console.log(this.state.notes)
    return (
      <Box>
        <Navbar /> {/* div que contiene notas y files */}{' '}
        <div className='notes-container'>
          {/*Div de files  */}
          <div className='notes-header'>
            {this.state.notes.map((note) => {
              //console.log('map', note);
              return (
                <ListItem key={note.id}>
                  <Note
                    noteContent={note.noteContent}
                    noteid={note.id}
                    userEmail={note.userEmail}
                  />
                </ListItem>
              );
            })}
            {/*<p className='notes-body'> notes body </p> <ul> </ul>
            {this.state.notes.map((note) => {
              //console.log('map', note);
              return (
                <Note
                  key={note.id}
                  noteContent={note.noteContent}
                  noteid={note.id}
                  userEmail={note.userEmail}
                />
              );
            })}*/}
          </div>
          <div className='notes-footer'>
            <NoteForm addNote={this.addNote} deletePost={this.deletePost} />
            {/* <NoteForm addNote={this.addNote} removeNote={this.Note} />  ORIGINAL/FUNCIONAL */}
          </div>
        </div>
      </Box>
    );
  }
}
export default Home;
