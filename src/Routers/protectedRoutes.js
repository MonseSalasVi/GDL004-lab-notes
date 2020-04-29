import React from 'react';
import Home from '../views/Home';

const protectedRoutes = [
	{
		name: 'Home',
		exact: true,
		path: '/Home',
		main: props => <Home {...props} />,
		public: false,
	},
];

export default protectedRoutes;