/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => (
  <ul className="right">
    <li>
      <a onClick={props.signOut} to="/create">
        New Project
      </a>
    </li>
    <li>
      <NavLink to="/">Log Out</NavLink>
    </li>
    <li>
      <NavLink to="/" className="btn btn-floating pink lighten-1">
        PK
      </NavLink>
    </li>
  </ul>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
