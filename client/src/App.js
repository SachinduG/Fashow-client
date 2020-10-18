import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';

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
            <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
