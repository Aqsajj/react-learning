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

export const auth = (email, password) => {
    return dispatch => {
        dispatch(
            // send request
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEYAAAAUH1Qf0E:APA91bHsaqJoTfq0H8E6V0C6cf7VBTeAl9mDcBd1X03NL4BmuWwOCe44Bz829GGsupEPqAueG3kf4VMHM8eMsHG9d2mZUCExM-p-IRIBLcMkuFh_kHOq-SzH4I-IZN2nOTBfgnfQcUn4]')
        );
    };
};