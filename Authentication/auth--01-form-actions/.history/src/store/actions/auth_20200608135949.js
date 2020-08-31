import * as actionTypes from './actionTypes';
import axios from 'axios'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpZR6EDGMGPd_uIGa1jvRPRSHP-u6yq4I'
        dispatch(authStart())
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        // send request
        axios.post(url, authData)
            .then(res => {
                console.log(res)
                dispatch(authSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail())
            })
    };
};