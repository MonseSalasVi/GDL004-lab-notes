import React, {Component} from 'react'
import './Note.css';
//import firebase, {firestore}from 'firebase'
//import { render } from '@testing-library/react'

class Note extends Component{
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteid = props.noteid;    
  }
  handleRemove(id){
    alert('remove:', id)
  }
  render(){
    console.log('print note', this.props.noteContent)
    return(
    <div key={this.props.key} className="Note">
      <span
      onClick= { ()=> this.handleRemove(this.noteid) }
      > &times;</span>
      {/* <li > {this.noteid}</li> */}
      <p>{this.noteContent}</p>
    </div>
    
    )
  }
}
export default Note;

