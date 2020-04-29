import React from "react";
import routes from "../Routers/routers";
import { Link } from "react-router-dom";

const Header = () => (
  <ul className="nav">
    {routes.map((route, i) => (
      <li key={i}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
);

export default Header;