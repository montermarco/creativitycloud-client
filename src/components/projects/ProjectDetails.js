import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {showProject, projectList} from '../../actions';

class ProjectDetails extends Component {

    componentWillMount(){    
        this.props.showProject(this.props.match.params.id);
        console.log(this.props)
    }

    renderProject(){
        
        return (
                <div>
                <h4>{this.props.pro}</h4>
                <Link to={'/projects'}>atras</Link>
                </div>
            )

    }

    render() {       
        return (
            <div>
              {this.renderProject()}              
            </div>
        );
    }
} 


export default connect(null, {showProject, projectList})(ProjectDetails);
