/*-eslint-disable*/

import { showAlert } from './alerts';
import axios from 'axios';

export const signup = async (email, name, password, passwordConfirm) => {
  console.log(email, name, password, passwordConfirm);
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        email,
        name,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === 'sucess') {
      showAlert('success', 'Signed up successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
