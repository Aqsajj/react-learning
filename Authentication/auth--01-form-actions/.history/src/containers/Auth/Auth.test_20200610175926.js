// we test reducer functions 

import reducer from './Auth'
import * as ActionTypes from '../../store/actions/actionTypes'

describe('auth reducer', () => [
    it('should return initial state', () => {
        expect(reducer(undefined, {}))
    })
])