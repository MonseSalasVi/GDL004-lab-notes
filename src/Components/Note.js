import React, { Component } from 'react';
import './Note.css';
//import firebase, {firestore}from 'firebase'
//import { render } from '@testing-library/react'

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteid = props.noteid;
    //this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(id) {
    const response = window.confirm('Are you sure?');
    if (response) {
      this.noteid.removeNote(id);
      console.log(id);
    }
  }
  render() {
    console.log('print note', this.props.noteContent, this.props.noteid);
    return (
      <div key={this.props.noteid} className='Note'>
        <span onClick={() => this.handleRemove(this.props.noteid)}>
          &times;
        </span>
        {/* <li> {this.noteid}</li> */}
        <p>{this.noteContent}</p>
      </div>
    );
  }
}
export default Note;
