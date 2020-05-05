import React, {Component} from 'react';
import firebase from 'firebase/app';
// import firebaseConfig from '../firebase.config';
// import AuthContext from '../Components/AuthContext';

import Note from '../Components/Note'
import NoteForm from '../Components/Noteform'
class Home extends Component {
  constructor() {
    super();
    this.state ={
      notes: [  ]
    };
    //this.addNote = this.addNote.bind(this)
    
    this.notesCollection = firebase.firestore().collection('notes')
    this.currentUser = firebase.auth().currentUser;

    this.addNote = this.addNote.bind(this)
  };

  componentDidMount(note) {
    this.notesCollection.get({
    
    }).then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          // note.push({
          //   noteId: doc.id,
          //   noteContent: doc.data('noteContent')
          // })
  })
      
  })
  .catch((err)=> {
console.log('salio mal')
  })
}

    /*this.db.on('child_added', snap => {
      notes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent
      })
      this.setState({notes});
    });*/
  
//entender que es firestore y realtime

// No volvere a ver vidoes de hace 4 a;os 
  removeNote(){

  }
  addNote(note){
    //let {notes} = this.state;
    this.notesCollection.add({
      userEmail: this.currentUser.email,
      noteContent: note
    }).then((result) => {
      console.log('created',result)
    })
    .catch((err)=> {

    })
  }
  
  render() {
  return(
    <div>
      <ul className="nav-menu"> 
        <li> <h2> User</h2> </li>
          <li> <button className= "menuBtn" >
           <img 
            src="https://raw.githubusercontent.com/MonseSalasVi/GDL004-lab-notes/develop/src/img/menu.png" 
            alt="logo" /> Menu  </button>
           </li>
       </ul>

       {/* div que contiene notas y files */}
      <div className="notes-container">
        {/*Div de files  */}
       <div className="notes-header"> 
       <p className="notes-body"> notes body</p>
       <ul></ul>
         {this.state.notes.map(note => {
           return (
            <Note
              noteContent = {note.noteContent}
              noteid = {note.noteid}
              key={note.noteid}

            />

           )
         })}
       
       </div> 
       {/* div de mi nota */}
       <div className="notes-footer">
        <NoteForm addNote={this.addNote}/>
       </div>

      </div>
    </div>

   )   
  }
}
export default Home;


// export default () => {
//   return (
    
//     <div className="Container-Home">
//     <Nav/>
//     //<ContainerNotesFile/>
//  </div>
//   )
// }
// constructor(props) {
//   super(props)
//   this.state = {
//     newTask: "",
//     tasks: []
//   }
// }

// handleTaskChange = (event) => {
//   this.setState({
//     newTask: event.target.value,
//   })
// }
// handleClick = (event) => {
//   event.preventDefault();
//   let newTasks = this.state.tasks;
//   newTasks.push(this.state.newTask)
//   this.setState({
//     newTask: "",
//     tasks: newTasks
//   })
// }
//  render (){
// return(
//     <div>
//       <ul className="nav-menu"> 
//         <li> <h2> User</h2> </li>
//           <li> <button className= "menuBtn" >
//            <img 
//             src="https://raw.githubusercontent.com/MonseSalasVi/GDL004-lab-notes/develop/src/img/menu.png" 
//             alt="logo" /> Menu  </button>
//            </li>
//        </ul>
//        {/* div que contiene notas y files */}
//       <div className="files-notes-container">
//         {/*Div de files  */}
//        <div className="files-container"> 
//        <p className="test-label"> {this.state.newTask}</p>
//        </div> 
//        {/* div de mi nota */}
//        <div className="notes-container">
//        <textarea onChange={this.handleTaskChange} className= "new-task" placeholder="New note"></textarea>
//      <button onClick={this.handleClick}> new nota</button>;
//        </div>

//       </div>
//     </div>

// )   
// }
// }

//<button onClick={() => firebase.auth().signOut()}>logout</button>