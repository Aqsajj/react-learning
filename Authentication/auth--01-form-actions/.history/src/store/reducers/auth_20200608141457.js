import * as actionTypes from '../actions/actionTypes'
import { authStart } from '../actions/auth';
import updateObject from '../utility'
const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                updateObject(state, { loading:true})
            }
    }
}

export default reducer;