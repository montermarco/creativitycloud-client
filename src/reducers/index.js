import { combineReducers } from 'redux'
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    project: projectReducer,
    user: userReducer
});
