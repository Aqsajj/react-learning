import * as ActionRTypes from '../actions'

const initialState = {
    results: []
}

const results = (state = initialState, action) => {
    switch (action.type) {
        case ActionRTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(
                    {
                        id: new Date(),
                        value: state.counter
                    })
            }

        case ActionRTypes.DELETE_RESULT:
            const arr = state.results.filter(result => { return result.id !== action.elemId })
            console.log(arr)
            return {
                ...state,
                results: arr
            }
    }

    return state
}

export default results;