import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types'

// SERVICE
const baseURL = process.env.REACT_APP_P3;

// LOGIN 
export const login = (username, password) => async dispatch => {
    try {
        //debugger;
        const response = await axios.post(`${baseURL}/login`, {username, password })
        dispatch({type: LOGIN_USER, payload: response})
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

//SIGNUP
export const signup = (username, password) => async dispatch => {
    try {
        const response = await axios.post(`${baseURL}/signup`, {username, password})
        console.log(response)
        dispatch({ type: SIGNUP_USER, payload: response })
    } catch (error) {
        console.log(error)
    }
};

//LOGUOT
export const logout = () => async dispatch => {
    await axios.get(`${baseURL}/logout`)
    dispatch({type: LOGOUT_USER, payload: {}})
};



