import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/">New Project</NavLink>
      <NavLink to="/">Log Out</NavLink>
      <NavLink to="/" className="btn btn-floating pink lighten-1">
        PK
      </NavLink>
    </li>
  </ul>
);

export default SignedInLinks;
