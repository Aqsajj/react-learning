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
    return (dispatch, getState) => {
        const prevState = getState().ctr.counter;
        console.log("TCL: storeResult -> prevState", prevState)
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000)
    }
}
export const deleteResult = (resElmId) => {
    return {
        type: ActionTypes.DELETE_RESULT,
        resultElId: resElmId
    }
}