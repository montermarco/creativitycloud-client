import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
//import Secret from './components/auth/Secret';
import Landing from './components/site/Landing';
import SignupForm from './components/auth/Signup';
import LoginForm from './components/auth/Login';
import Header from './components/site/Header';
//import Foot from './components/site/Footer';
import Home from './components/site/Home';
import ProfileCard from './components/site/ProfileCard';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails'
import Steps from './components/projects/Steps';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import * as actions from './actions'


class App extends Component {
  componentWillMount(){
    this.props.loggedin()
  }
  render() {
    return (    
        <div>
        <BrowserRouter>
          <Header/>
            <Switch>
                <Route exact path ='/' component={Landing} />
                <Route exact path ='/home' component={Home} />
                <Route exact path ='/login' component={LoginForm} />
                <Route exact path ='/signup' component={SignupForm} />
                <Route exact path ='/profile' component={ProfileCard} />
                <Route exact path ='/projects' component={ProjectList} />
                <Route exact path ='/cat/:categoria' component={ProjectList} />
                <Route exact path ='/projects/one' component={Steps} />
                <Route exact path ='/projects/:id' component={ProjectDetails} />
                
            </Switch> 
                    
      </BrowserRouter>            
        </div>
    )
  }
}

export default connect(({auth}) => auth, actions)(App);

//<Secret user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />