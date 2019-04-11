import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'


export const Secret  = ({component: Component, user, ...rest}) => {
  console.log({component: Component, user, ...rest})
    return (
      <Route
        {...rest}
        render={ props  => {
            if(user){
              return <Component {...props} loggedInUser={user}/>
            } else {
              return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}

const mapStateToProps = ({ auth }) => auth
export default connect(mapStateToProps)(Secret)

 