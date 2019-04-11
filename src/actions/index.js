import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER, LOGGEDIN, PROJECT_LIST, GET_USER, SHOW_PROJECT } from './types'
import AuthService from '../components/auth/AuthService';




//////////////////////////////////////// SERVICE  

const baseURL = process.env.REACT_APP_P3;
//atention in reducers parameters, must not be undifined
// Need one axios.create with sendCredentials = true and other without
//The one without credentials is for the public routes


const service = new AuthService()


////////////////////////////////////////////////// AUTH ACTIONS
//SIGNUP
export const signup = (username, password) => async dispatch => {
    try {
        const response = await axios.post(`${baseURL}/signup`, {username, password}, {withCredentials: true})
        dispatch({ type: SIGNUP_USER, payload: response })
    } catch (error) {
        console.log(error)
    }
};


// LOGIN    
export const login = (username, password) => async dispatch => {
    try {        
        const {data} = await axios.post(`${baseURL}/login`, {username, password }, {withCredentials: true})
        dispatch({type: LOGIN_USER, payload: {user: data}})
    } catch (error) {
        console.log(error)
    }
};


 //GET USER 
export const getUser = (id) => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/login` , {id}, { withCredentials: true})
        dispatch({type: GET_USER, payload: response })    
    } catch (error) {
        console.log(error)
    }
};

//LOGUOT
export const logout = () => async dispatch => {
    try {
        await axios.get(`${baseURL}/logout`, { withCredentials: true})
        dispatch({type: LOGOUT_USER, payload: {}})
    } catch (error) {
        console.log(error)
    } 
};

//LOGGEDIN
export const loggedin = () => async dispatch => {
    const {data} = await axios.get(`${baseURL}/loggedin`, { withCredentials: true})
    console.log('on action creator', data)
    dispatch({type: LOGGEDIN, payload: {user: data}})
    // console.log('loggedin' + response)
};


//////////////////////////////////////////////  PROJECT ACTIONS


//SHOW ALL PROJECTS - PROJECT LIST - GET
export const projectList = () => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/projects`, { withCredentials: true})
        //debugger;        
        dispatch({ type: PROJECT_LIST, projectList: response.data })
        console.log(response) 
    } catch (error) {
        console.log(error)
    }            
}
    
//SHOW ONE PROJECT - GET
export const showProject = (id) => async dispatch => {
    //debugger
    try {
        const response = await axios.get(`${baseURL}/projects/${id}`, { withCredentials: true})
        dispatch({ type: SHOW_PROJECT, project: response.data }) 
        console.log('hacia el id' + response)
    } catch (error) {
        console.log(error)
    }            
}




















/////////////////////////////////////// ES2015 SYNTAX FOR REFERENCE
//-----> note - Add try-catch for error handling <------
/* 
REDUCERS ALWAYS MUST RETURN SUEMTHING BUT UNDEFINIED EVEN NULL

export const actionCreatior = () => {
    return function(dispatch, getState) {
        const promise = axios.post('/myUrl');
        return {
            type: 'ACTION_CREATOR',
            payload: promise
        };
    };
};

*/

