/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">działa</div>;
      </BrowserRouter>
    );
  }
}

export default App;
