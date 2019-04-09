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
import AddProject from './components/projects/AddProject';
import 'antd/dist/antd.css';


class App extends Component {

  render() {
    return (    
        <div>
        <BrowserRouter>
          <div className='nav'><Header/></div>          
            <Switch>
                <Route exact path ='/' component={Landing} />
                <Route path ='/home' component={Home} />
                <Route path ='/login' component={LoginForm} />
                <Route path ='/signup' component={SignupForm} />
                <Route exact path ='/profile' component={ProfileCard} />
                <Route exact path ='/projects' component={ProjectList} />
                <Route exact path ='/projects/new' component={AddProject} />
                <Route exact path ='/projects/:id' component={ProjectDetails} />
                
            </Switch> 
                    
      </BrowserRouter>            
        </div>
    );
  }
}

export default App;

//<Secret user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />