import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';


class UserHeader extends Component {
    
    componentDidMount(){
        this.props.getUser(this.props.userId)
    }

    render() {
        const user = this.props.users.find( (user) => user.id === this.props.userId )
        if(!user){
            return null
        } 
        return (
            <div>
                {user.username}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user}
}

export default connect(mapStateToProps, {getUser}) (UserHeader);
