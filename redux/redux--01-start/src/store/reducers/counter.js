import * as ActionRTypes from '../actions'

const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
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
    }

    return state
}

export default counter;