// we test reducer functions 

import authReducer from './auth'
import * as ActionTypes from '../actions/actionTypes'

describe('auth reducer', () => [
    it('should return initial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
])