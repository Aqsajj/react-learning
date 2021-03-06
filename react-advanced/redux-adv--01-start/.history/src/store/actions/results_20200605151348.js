import * as ActionTypes from '../actions/actionTypes'

// Synchronous action creator
export const saveResult = (res) => {
    return {
        type: ActionTypes.STORE_RESULT,
        result: res
    }
}

// async action 
export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000)
    }
}
export const deleteResult = (resElmId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElmId
    }
}