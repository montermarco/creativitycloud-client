import axios from 'axios';

class AuthService {
  
    service = axios.create({
      baseURL: process.env.REACT_APP_P3,
      withCredentials: true
    });
    myService = this.service;
}

export default AuthService;