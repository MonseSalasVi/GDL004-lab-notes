import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router/example';

ReactDOM.render(
<App />,
document.getElementById('root')
);





// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";


// import { AuthContextProvider } from './Components/AuthContext';
// import protectedRoutes from './Routers/protectedRoutes'
// import * as firebase from "firebase";
// import firebaseConfig from "./firebase.config";

// import ProtectedRouteHoc from './Routers/ProtectedRouteHoc'

// const app = firebase.initializeApp(firebaseConfig);
// export default app
// function App() {
  
//   return (
//     <AuthContextProvider>
      
//       <div className="App">
//         <Router>
//           <Switch>
//             {protectedRoutes.map(route => (
//               <ProtectedRouteHoc
//                 key={route.path}
//                 path={route.path}
//                 component={route.main}
//                 exact={route.exact}
//                 public={route.public}
//               />
//             ))}
//             {routes.map(route => (
//               <Route
//                 key={route.path}
//                 path={route.path}
//                 exact={route.exact}
//                 component={route.main}
//               />
//             ))}
//           </Switch>
//         </Router>
//       </div>
//     </AuthContextProvider>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);