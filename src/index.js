import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";
import App from './app.js';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
<App />,
document.getElementById('root')
);



