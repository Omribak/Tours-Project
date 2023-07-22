/*eslint-disable*/

import axios from 'axios';
import { showAlert } from './alerts';

//type - 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    console.log(url);

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    if (res.data.status === 'sucess') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
