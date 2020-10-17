import React, { Component } from 'react';
import { login } from './UserFunctions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email_Address: '',
      Password: '',
      
      EmailAddressError: '',
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
      EmailAddressError: "",
      PasswordError: ""
    };

    if ("Email_Address" !== undefined){
      var patter = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!patter.test(this.state.Email_Address)){
        isError = true;
        errors.EmailAddressError = "Please enter valid email address"
      }
    }

    if(this.state.Password.length < 6 ){
      isError = true;
      errors.PasswordError = "Please enter your password"
    }

    this.setState({
      ...this.state,
      ...errors
  });

  return isError;

  }
  onSubmit(e) {
    e.preventDefault();

    const err = this.validate();
      if(!err){

      const user = {
        Email_Address: this.state.Email_Address,
        Password: this.state.Password
      };

      login(user).then(res => {
        if (res) {
          alert('Successfully Logged In')
          this.props.history.push(`/profile`);
        }
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-4'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal' style={{marginLeft: 180}}>Sign In</h1>
              <div className="form-group " style={{ marginTop:50, display: "flex" }}>
                  <label><span className="fa fa-user" style={{ fontSize: "28px" }}></span> </label>
                  <div className="col-sm-12">
                    <input type="text"
                      className="form-control" placeholder="Email Address"
                      name="Email_Address"
                      value={this.state.Email_Address} 
                      onChange={this.onChange} required
                    />
                    <span className="text-danger">{this.state.EmailAddressError}</span>
                  </div>
                </div>
                
                <div className="form-group" style={{marginTop:50, marginBottom: 40, display: "flex" }}>
                  <label><span className="fa fa-lock" style={{ fontSize: "28px" }}></span> </label>
                  <div className="col-sm-12">
                    <input type="password"
                      className="form-control" placeholder="Password"
                      name="Password"
                      value={this.state.Password}
                      onChange={this.onChange} required
                    />
                    <span className="text-danger">{this.state.PasswordError}</span>
                  </div>
                </div>
              
              <button
                type='submit'
                className='btn btn-lg btn-primary btn btn-outline-success'
                style={{marginLeft: 200}}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
