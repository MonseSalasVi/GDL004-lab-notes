import React from 'react'

import firebase from 'firebase'
import Files from '../Components/Files'
import Note from '../Components/Note'

export default () => {
  return (
    
    <div className="ContainerNoteFiles">
    <Files/> 
    <Note/>
    </div>
  )
}
