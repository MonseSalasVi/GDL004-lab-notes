import React, {Component}from 'react';
import './NoteForm.css'


class NoteForm extends Component {
    constructor(){
        super()
        this.addNote= this.addNote.bind(this);
    }
    addNote(){
        console.log ( 'noteform', this.textarea.value)
        this.props.addNote(this.textarea.value);
        this.textarea.value = '';
        this.textarea.focus();
    }

    render(){
        return (
        <div className="NoteForm">
            <textarea
            ref={textarea => {this.textarea= textarea}}
            placeholder="New Note" 
            type="text"/>
            <button
            onClick={this.addNote}>
                add Note
            </button>
        </div>
        )
    }
}

export default NoteForm;