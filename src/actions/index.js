import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER,  PROJECT_LIST, GET_USER, SHOW_PROJECT } from './types'

// SERVICE  
const baseURL = process.env.REACT_APP_P3;

// LOGIN    
export const login = (username, password) => async dispatch => {
    try {        
        const response = await axios.post(`${baseURL}/login`, {username, password })
        dispatch({type: LOGIN_USER, payload: response})
    } catch (error) {
        console.log(error)
    }
};

//SIGNUP
export const signup = (username, password) => async dispatch => {
    try {
        const response = await axios.post(`${baseURL}/signup`, {username, password})
        dispatch({ type: SIGNUP_USER, payload: response })
    } catch (error) {
        console.log(error)
    }
};

//GET USER 
export const getUser = (id) => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/projects/${id}`)
        dispatch({type: GET_USER, payload: response })    
    } catch (error) {
        console.log(error)
    }
};


//LOGUOT
export const logout = () => async dispatch => {
    await axios.get(`${baseURL}/logout`)
    dispatch({type: LOGOUT_USER, payload: {}})
};



//PROJECT LIST
export const projectList = () => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/projects`)        
        dispatch({ type: PROJECT_LIST, payload: response.data }) 
    } catch (error) {
        console.log(error)
    }            
}
    
//SHOW ONE PROJECT
export const showProject = (id) => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/projects/:id`)        
        dispatch({ type: SHOW_PROJECT, payload: response.data }) 
    } catch (error) {
        console.log(error)
    }            
}




















//////////////// ES2015 SYNTAX FOR REFERENCE
//-----> note - Add try-catch for error handling <------
/* 

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