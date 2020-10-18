import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import '../../App.css';

export class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="row center" >
              <div className="center">
              <h4>
              <b>{user.First_Name.split(" ")[0]}'s Profile</b>
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>Fashow</span> app 👏
              </p>
            </h4>
              </div>
              <div className="landing-copy col s12 left-align" style={{ margin: 30}}>
                <h5>{`First Name: ${user.First_Name}`}</h5>
                <h5>{`Last Name: ${user.Last_Name}`}</h5>
                <h5>{`Email Address: ${user.Email_Address}`}</h5>
                <h5>{`Mobile Number: ${user.Mobile_Number}`}</h5>
                <h5>{`Home Address: ${user.Home_Address}`}</h5>
              <div className="center">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "2rem"
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-large waves-effect waves-light hoverable red accent-3">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(Profile);