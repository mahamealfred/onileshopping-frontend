import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App