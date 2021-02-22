import React, { Component } from 'react';

class SignIn extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <form onSubmit={} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
              <label htmlFor="email">Email</label>
<input type="email" id="email" onChange={}/>
          </div>
          <div className="input-field">
              <label htmlFor="password">Email</label>
<input type="password" id="password" onChange={}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
