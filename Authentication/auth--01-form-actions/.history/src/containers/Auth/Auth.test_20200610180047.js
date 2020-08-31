// we test reducer functions 

import reducer from './Auth'
import * as ActionTypes from '../../store/actions/actionTypes'

describe('auth reducer', () => [
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
])