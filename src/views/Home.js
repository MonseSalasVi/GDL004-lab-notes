import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Note from '../Components/Note';
import NoteForm from '../Components/Noteform';
import Box from '@material-ui/core/Box';

import Navbar from '../Components/Navbar';
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
  removeNote(noteid) {
    this.notesCollection.doc(noteid).delete();
  }

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
        <Navbar />
        {/* <ul className='nav-menu'>
          <li>
            {' '}
            <h2> User </h2>{' '}
          </li>{' '}
          <li>
            {' '}
            <button className='menuBtn'>
              <img
                src='https://raw.githubusercontent.com/MonseSalasVi/GDL004-lab-notes/develop/src/img/menu.png'
                alt='logo'
              />{' '}
              Menu{' '}
            </button>{' '}
          </li>{' '}
        </ul>{' '} */}
        {/* div que contiene notas y files */}{' '}
        <div className='notes-container'>
          {' '}
          {/*Div de files  */}{' '}
          <div className='notes-header'>
            <p className='notes-body'> notes body </p> <ul> </ul>{' '}
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
            })}{' '}
          </div>{' '}
          <div className='notes-footer'>
            <NoteForm addNote={this.addNote} removeNote={this.Note} />{' '}
          </div>{' '}
        </div>{' '}
      </Box>
    );
  }
}
export default Home;
