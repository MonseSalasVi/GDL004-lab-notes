import React, { Component } from 'react';
import './Note.css';
//import firebase, {firestore}from 'firebase'
//import { render } from '@testing-library/react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteid = props.noteid;
    this.deletepost = this.deletepost.bind(this);
    //this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(id) {
    const response = window.confirm('Are you sure?');
    if (response) {
      //removeNote(id);
      console.log(this.noteid);
    }
  }

  deletepost(id) {
    console.log('quiero borrar desde note.js', id);
    //this.deletepost(this.id);
  }
  render() {
    console.log('print note', this.props.noteContent, this.props.noteid);
    return (
      <div key={this.props.noteid} className='Note'>
        <IconButton
          edge='end'
          // removeNote={this.Note}
          aria-label='delete'
          onClick={this.deletepost(this.props.noteid)}
        >
          <DeleteIcon />
        </IconButton>

        {/* <span onClick={() => this.handleRemove(this.props.noteid)}>
          &times;
        </span> */}
        {/* <li> {this.noteid}</li> */}
        <Typography variant='h7'>{this.noteContent}</Typography>
      </div>
    );
  }
}
export default Note;
