  
import React, { useContext } from "react";

import { Route, Redirect, withRouter } from 'react-router-dom';

import { bool, any, object } from 'prop-types';
import AuthContext from '../Components/AuthContext'

const ProtectedRouteHoc = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    if(isLoggedIn||rest.public){
        // console.log('/Home')
        
        return(
            <Route
            {...rest}
            render={props => {
                return <Component {...props}></Component>;
           }}
            />
        );
    }
    return <Redirect to={{pathname: '/'}}/>;
};

ProtectedRouteHoc.propType = {
    component:any,
    inLoggedIn: bool,
    rest:object,
    props: object,
};

export default withRouter(ProtectedRouteHoc);