import React, { Component } from 'react';
import UserHeader from '../site/UserHeader';
import {connect} from 'react-redux';
import {getUser, projectList} from '../../actions';

class ProjectDetails extends Component {
    render() {
        return (
            <div>
               Project detail 
               <UserHeader userId={this.props.project._id}/>
               
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { project: state.project}
}
export default connect(mapStateToProps, {projectList, getUser})(ProjectDetails);

