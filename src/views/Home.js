import React, {Component} from 'react';
import firebase from 'firebase/app';
import firebaseConfig from '../firebase.config';
import AuthContext from '../Components/AuthContext';



import Note from '../Components/Note'
import NoteForm from '../Components/Noteform'
class Home extends Component {
  constructor() {
    super();
    this.state ={
      notes: [
        // {noteid: 1, noteContent: 'note 1'},
        // {noteid: 2, noteContent: 'note 2'}
      ]
    };
    //this.addNote = this.addNote.bind(this)
    
    this.db = firebase.database().ref().child('notes')
    this.addNote = this.addNote.bind(this)
  };
  componentDidMount() {
    const {notes} =  this.state;
    this.db.on('child_added', snap => {
      notes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent
      })
      this.setState({notes});
    });
  }


  removeNote(){

  }
  addNote(note){
    // let {notes} = this.state;
    // notes.push({
    //   noteid: notes.lenght + 1,
    //   noteContent: note
    // });
    // this.setState( { notes })
    this.db.push().set({noteContent:note});

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