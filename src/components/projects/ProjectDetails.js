import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {showProject} from '../../actions';

class ProjectDetails extends Component {

    componentWillMount(){    
        this.props.showProject(this.props.match.params.id);
        console.log(this.props.match.params.id)
    }


    renderProject(){
        console.log(this.props.project)
        return (
                <div>
                <h4>from project details</h4>
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


export default connect(null, {showProject})(ProjectDetails);
