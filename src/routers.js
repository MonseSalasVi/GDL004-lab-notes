import React from "react";
import Login from "./views//Login";
import Join from "./views/Join";

const routes = [
  { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;