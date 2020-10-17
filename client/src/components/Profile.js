import React, { Component } from 'react';
import decodeJwt from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Mobile_Number: '',
      Home_Address: '',
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decode = decodeJwt(token);
    this.setState({
      First_Name: decode.First_Name,
      Last_Name: decode.Last_Name,
      Email_Address: decode.Email_Address,
      Mobile_Number: decode.Mobile_Number,
      Home_Address: decode.Home_Address
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div className='col-sm-8 mx-auto'>
            <h1 className='text-center'>Hello {this.state.First_Name}!</h1>
            <h3 className='text-center'>Welcome to the User Profile!</h3>
            <br />
          </div>
          <table className='table col-md-6 mx-auto'>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.First_Name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.Last_Name}</td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>{this.state.Email_Address}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{this.state.Mobile_Number}</td>
              </tr>
              <tr>
                <td>Home Address</td>
                <td>{this.state.Home_Address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
