import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/create">New Project</NavLink>
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

const mapDispatcheToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect()(SignedInLinks);
