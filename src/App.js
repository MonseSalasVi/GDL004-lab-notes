import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home'
import SignUp from './views/SignUp'
import Login from './views/Login.jsx'
import {AuthProvider} from './firebase/Auth'
import PrivateRoute from "./PrivateRout/PrivateRoute"

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div className="App" >
        <PrivateRoute exact path="/" component ={Home}/>
        <Route exact path="/Login" component ={Login}/>
        <Route exact path="/SignUp" component ={SignUp}/>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
