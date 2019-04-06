import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
import SignupForm from './components/auth/Signup';
import LoginForm from './components/auth/Login';
//import Authorization from './components/auth/Authorization,';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (    
      <BrowserRouter>
        <div>
            <Route extact path ='/login' component={LoginForm} />
            <Route extact path ='/signup' component={SignupForm} />
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
