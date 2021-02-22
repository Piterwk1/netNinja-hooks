import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedInLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/" />
    </li>
  </ul>
);

export default SignedInLinks;
