// create my react sagas
import { put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
// its a kind of function

function* logout(action) {
    //generators *
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    put({
        type: actionTypes.AUTH_LOGOUT
    })
}