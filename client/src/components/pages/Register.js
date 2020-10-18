import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import '../../App.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: "",
      Last_Name: "",
      Email_Address: "",
      Mobile_Number: "",
      Home_Address: "",
      Password: "",
      Password2: "",
      errors: {}
    };
  }

componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();

const newUser = {
  First_Name: this.state.First_Name,
  Last_Name: this.state.Last_Name,
  Email_Address: this.state.Email_Address,
  Mobile_Number: this.state.Mobile_Number,
  Home_Address: this.state.Home_Address,
  Password: this.state.Password,
  Password2: this.state.Password2
  };
  this.props.registerUser(newUser, this.props.history);
};

render() {
    const { errors } = this.state;
return (
  <div className="container">
    <div className="row">
      <div className="col s8 offset-s2">
        <Link to="/" className="btn-flat waves-effect">
          <i className="material-icons left">keyboard_backspace</i> Back to
            home
        </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Sign Up for Fashow</b>
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.First_Name}
                error={errors.First_Name}
                id="First_Name"
                type="text"
                className={classnames("", {
                  invalid: errors.First_Name
                })}
              />
              <label htmlFor="First_Name">First Name</label>
              <span className="red-text">{errors.First_Name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Last_Name}
                error={errors.Last_Name}
                id="Last_Name"
                type="text"
                className={classnames("", {
                  invalid: errors.Last_Name
                })}
              />
              <label htmlFor="Last_Name">Last Name</label>
              <span className="red-text">{errors.Last_Name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Email_Address}
                error={errors.Email_Address}
                id="Email_Address"
                type="email"
                className={classnames("", {
                  invalid: errors.Email_Address
                })}
              />
              <label htmlFor="Email_Address">Email Address</label>
              <span className="red-text">{errors.Email_Address}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Mobile_Number}
                error={errors.Mobile_Number}
                id="Mobile_Number"
                type="number"
                className={classnames("", {
                  invalid: errors.Mobile_Number
                })}
              />
              <label htmlFor="Mobile_Number">Mobile Number</label>
              <span className="red-text">{errors.Mobile_Number}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Home_Address}
                error={errors.Home_Address}
                id="Home_Address"
                type="text"
                className={classnames("", {
                  invalid: errors.Home_Address
                })}
              />
              <label htmlFor="Home_Address">Home Address</label>
              <span className="red-text">{errors.Home_Address}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Password}
                error={errors.Password}
                id="Password"
                type="password"
                className={classnames("", {
                  invalid: errors.Password
                })}
              />
              <label htmlFor="Password">Password</label>
              <span className="red-text">{errors.Password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Password2}
                error={errors.Password2}
                id="Password2"
                type="password"
                className={classnames("", {
                  invalid: errors.Password2
                })}
              />
              <label htmlFor="Password2">Confirm Password</label>
              <span className="red-text">{errors.Password2}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));