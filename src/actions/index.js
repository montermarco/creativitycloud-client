import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER, LOGGEDIN, PROJECT_LIST, GET_USER, ADD_STEP_ONE_FORM, SHOW_PROJECT, ONE_CATEGORY } from './types'


//////////////////////////////////////// SERVICE  

const baseURL = process.env.REACT_APP_P3;


////////////////////////////////////////////////// AUTH ACTIONS
//SIGNUP
export const signup = (username, password) => async dispatch => {
    try {
        const {data} = await axios.post(`${baseURL}/signup`, {username, password}, {withCredentials: true})
        dispatch({ type: SIGNUP_USER, payload:  data.categoria })
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
    console.log('on logged action creator', data)
    dispatch({type: LOGGEDIN, payload: {user: data}})
};


//////////////////////////////////////////////  PROJECT ACTIONS

//ADD STEP ONE FORM 
export const addStepOneForm = (email, role, organizacion, contacto, cargo) => async dispatch => {
    try {
        const response = await axios.post(`${baseURL}/projects`, { email, role, organizacion, contacto, cargo },  { withCredentials: true})
        console.log(response.data)
        dispatch({ type: ADD_STEP_ONE_FORM, formValues: response.data })        
    } catch (error) {
        console.log(error)
    }
}

//SHOW ALL PROJECTS - PROJECT LIST - GET
export const projectList = () => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/projects`, { withCredentials: true})  
        dispatch({ type: PROJECT_LIST, projectList: response.data })
    } catch (error) {
        console.log(error)
    }            
}
    
//SHOW ONE PROJECT - GET
export const showProject = id => async dispatch => {
    //debugger
    try {
        const response = await axios.get(`${baseURL}/projects/${id}`, { withCredentials: true})
        dispatch({ type: SHOW_PROJECT, project: response.data }) 
        console.log('hacia el id' + response)
    } catch (error) {
        console.log(error)
    }            
}

//SHOW ONE CATEGORY
export const oneCategory = category => async dispatch => {
    try {     
        const {data} = await axios.post(`${baseURL}/projects/cat/${category}`, {withCredentials: true})
        dispatch({type: ONE_CATEGORY, payload: {categoria: data}})
    } catch (error) {
        console.log(error)
    }
};















/////////////////////////////////////// ES2015 SYNTAX FOR REFERENCE
//-----> note - Add try-catch for error handling <------
//atention in reducers parameters in actions creators, must not be undifined. parameters are the payload, you'll pass as argumenta the data you want
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

