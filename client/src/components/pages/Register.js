import React, { Component } from 'react';
import { register } from './UserFunctions';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Mobile_Number: '',
      Home_Address: '',
      Password: '',

      FirstNameError:'',
      LastNameError:'',
      EmailAddressError:'',
      MobileNumberError:'',
      HomeAddressError:'',
      PasswordError:''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let isError = false;

    const errors = {
        FirstNameError:"",
        LastNameError:"",
        EmailAddressError:"",
        MobileNumberError:"",
        HomeAddressError:"",
        PasswordError:""
    };

      if(this.state.First_Name.length < 3){
          isError = true;
          errors.FirstNameError = "First Name must be at least 3 characters";
      }

      if(this.state.Last_Name.length < 3){
          isError = true;
          errors.LastNameError = "Last Name must be at least 3 characters";
      }

      if(this.state.Mobile_Number.length < 10){
          isError = true;
          errors.MobileNumberError = "Mobile Number must be at least 10 numbers";
      }

      if(this.state.Password.length < 6){
          isError = true;
          errors.PasswordError = "Password must be at least 6 characters";
      }

      if(this.state.Email_Address.indexOf("@") === -1){
          isError = true;
          errors.EmailAddressError = "Require Valid Email Address";
      }

      if ("Email_Address" !== undefined){
        var patter = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!patter.test(this.state.Email_Address)){
          isError = true;
          errors.EmailAddressError = "Please enter valid email address"
        }
      }

      if ("Mobile_Number" !== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(this.state.Mobile_Number)) {
            isError = true;
            errors.MobileNumberError = "Please enter only numbers.";
          }else if(this.state.Mobile_Number.length < 10){
            isError = true;
            errors.MobileNumberError = "Please enter valid phone number.";
          }
      }

      if(this.state.Home_Address === ""){
        isError = true;
        errors.HomeAddressError = "Please enter home address";
      }


    this.setState({
        ...this.state,
        ...errors
    });
  
    return isError;
 };
  onSubmit(e) {
    e.preventDefault();

    const err = this.validate();
      if(!err){


      const newUser = {
        First_Name: this.state.First_Name,
        Last_Name: this.state.Last_Name,
        Email_Address: this.state.Email_Address,
        Mobile_Number: this.state.Mobile_Number,
        Home_Address: this.state.Home_Address,
        Password: this.state.Password
      };

      register(newUser).then(res => {
          alert('Successfully Registered')
          this.props.history.push(`/login`);
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-3'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal' style={{marginLeft: 180}} ><label><span className="fa fa-user" style={{ fontSize: "28px" }}></span> </label> Register</h1>
                <p>Already Registered?<Link to="/login" className="btn btn">Login</Link></p>
              <div className='form-group'>
                <label htmlFor='First_Name'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='First_Name'
                  placeholder='Enter your First Name'
                  value={this.state.First_Name}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.FirstNameError}</span>
              </div>

              <div className='form-group'>
                <label htmlFor='Last_Name'>Last_Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='Last_Name'
                  placeholder='Enter your Last Name'
                  value={this.state.Last_Name}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.LastNameError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Email_Address'>Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  name='Email_Address'
                  placeholder='Enter Email Address'
                  value={this.state.Email_Address}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.EmailAddressError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Mobile_Number'>Mobile Number</label>
                <input
                  type='number'
                  className='form-control'
                  name='Mobile_Number'
                  placeholder='Enter Mobile Number'
                  value={this.state.Mobile_Number}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.MobileNumberError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Home_Address'>Home Address</label>
                <input
                  type='text'
                  className='form-control'
                  name='Home_Address'
                  placeholder='Enter Home Address'
                  value={this.state.Home_Address}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.HomeAddressError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='Password'
                  placeholder='Password'
                  value={this.state.Password}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.PasswordError}</span>
              </div>
              <button
                type='submit'
                className='btn btn-lg btn-primary btn btn-outline-success'
                style={{marginLeft: 200}}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
