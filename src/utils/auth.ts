import Cookies from 'js-cookie';
import axios from 'axios';

export const setAuthToken = (token: string,role:string) => {
  Cookies.set('authToken', token, { expires: 7 }); 
  Cookies.set('role', role, { expires: 7 }); 
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  Cookies.remove('authToken');
  Cookies.remove('role');
  delete axios.defaults.headers.common['Authorization'];
  window.location.href = '/login';
};