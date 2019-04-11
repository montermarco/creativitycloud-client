import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER, LOGGEDIN } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return action.payload
        case SIGNUP_USER:
            return action.payload
        case LOGOUT_USER:
            return action.payload  
        case LOGGEDIN:
            return action.payload            
        default:
            return state;    
    }
}; 

