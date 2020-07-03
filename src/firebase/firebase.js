import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp ({
    apiKey: "AIzaSyCsfygxiFEuwW9PTWkrcvGv1LHhDLCJOn4",
    authDomain: "notes-ab6fa.firebaseapp.com",
    databaseURL: "https://notes-ab6fa.firebaseio.com",
    projectId: "notes-ab6fa",
    storageBucket: "notes-ab6fa.appspot.com",
    messagingSenderId: "605689399979",
    appId: "1:605689399979:web:5455528f2f62b6102445ee",
    measurementId: "G-JQNMJEW0ZP"
  });

  export default app