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

    it('should return token on login', () => {
        expect(authReducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: ActionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some user-id'
        }))
    })
])