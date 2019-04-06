import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types'

// SERVICE
const baseURL = 'http://localhost:3001/api'

// LOGIN 
export const login = (email, password) => async dispatch => {
    try {
        const response = await axios.post(`${baseURL}/login`, {email, password })
        dispatch({type: LOGIN_USER, payload: response})
        debugger;
    } catch (error) {
        console.log(error)
    }
};

//SIGNUP
export const signup = (username, email, password, role) => async dispatch => {
    try {
        const response = await axios.post(`${baseURL}/signup`, {username, email, password, role })
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