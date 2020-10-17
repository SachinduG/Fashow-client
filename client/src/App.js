import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Home} />
          <div className='container'>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
