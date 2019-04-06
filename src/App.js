import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
import SignupForm from './components/auth/Signup';
import LoginForm from './components/auth/Login';
import Header from './components/site/Header';
import Landing from './components/site/Landing';

import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (    
      <BrowserRouter>
          <Header/>
        <div>
            <Route extact path ='/' component={Landing} />
            <Route extact path ='/login' component={LoginForm} />
            <Route extact path ='/signup' component={SignupForm} />            
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
