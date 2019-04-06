import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Authorization extends Component{
  state = {
    user : ''
  }

  componentWillReceiveProps(props){
    if(!props.data){
      this.setState({user: ''})
    }
  }

  componentWillMount(){
    if(this.props.data){
      this.setState({
        user: this.props.data.username 
      })
    }

  }

  onRedirect = () => {
    return (this.state.user === '') ?
    <Redirect to='/login'/> :
    <h5>{ this.state.user }</h5>
  }

  render(){
    return <div>
    {this.onRedirect()}
    </div>
  }
}

const mapStateToProps = ({ auth }) => auth

export default connect(mapStateToProps)(Authorization)