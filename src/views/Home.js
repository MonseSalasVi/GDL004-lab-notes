import React from 'react'

import firebase from 'firebase'
import Files from '../Components/Files'
import Note from '../Components/Note'
import Nav from '../Components/Nav'
export default () => {
  return (
    
    <div className="Container-Home">
    <Nav/>
    <Note/>
    <Files/> 
 </div>
  )
}


//<button onClick={() => firebase.auth().signOut()}>logout</button>