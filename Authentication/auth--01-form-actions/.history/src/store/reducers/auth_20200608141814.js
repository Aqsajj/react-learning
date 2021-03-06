import * as actionTypes from '../actions/actionTypes'
import { authStart } from '../actions/auth';
import updateObject from '../utility'
const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const authSuccess = () => {

}

const authFailed = () => {

}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: authStart(state, action)

        default:
            return state
    }

}

export default reducer;