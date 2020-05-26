import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routers/routers';
import './index.css';
//import AuthContext, { AuthContextProvider } from './Components/AuthContext';

import { AuthContextProvider } from './Components/AuthContext';
import protectedRoutes from './Routers/protectedRoutes';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';

import ProtectedRouteHoc from './Routers/ProtectedRouteHoc';

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <Router>
          <Switch>
            {' '}
            {protectedRoutes.map((route) => (
              <ProtectedRouteHoc
                key={route.path}
                path={route.path}
                component={route.main}
                exact={route.exact}
                public={route.public}
              />
            ))}{' '}
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}{' '}
          </Switch>{' '}
        </Router>{' '}
      </div>{' '}
    </AuthContextProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
