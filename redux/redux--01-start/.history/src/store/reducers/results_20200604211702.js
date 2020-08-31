import * as ActionRTypes from '../actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionRTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case ActionRTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case ActionRTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }

        case ActionRTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }

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

export default reducer;