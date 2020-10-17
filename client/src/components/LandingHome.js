import React, { Component } from 'react';

class LandingHome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div className='col-sm-8 mx-auto'>
            <h1 className='text-center'>Welcome!</h1>
            <h4 className='text-center'>Please login first.</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingHome;
