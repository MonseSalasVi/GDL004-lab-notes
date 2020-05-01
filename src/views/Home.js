import React from 'react'

import firebase from 'firebase'

import ContainerNotesFile from '../Components/ContainerNoteFile'
import Nav from '../Components/Nav'
export default () => {
  return (
    
    <div className="Container-Home">
    <Nav/>
    <ContainerNotesFile/>
 </div>
  )
}


//<button onClick={() => firebase.auth().signOut()}>logout</button>