import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { logoutSaga } from '../sagas/auth'
export { logoutSaga } from './auth'
function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
}