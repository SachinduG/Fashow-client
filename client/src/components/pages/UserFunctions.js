import axios from 'axios';

export const register = newUser => {
  return axios
    .post('users/register', {
      First_Name: newUser.First_Name,
      Last_Name: newUser.Last_Name,
      Email_Address: newUser.Email_Address,
      Mobile_Number: newUser.Mobile_Number,
      Home_Address: newUser.Home_Address,
      Password: newUser.Password
    })
    .then(response => {
      console.log('Registered');
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = user => {
  return axios
    .post('users/login', {
      Email_Address: user.Email_Address,
      Password: user.Password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getProfile = user => {
  return axios
    .get('users/profile', {
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
