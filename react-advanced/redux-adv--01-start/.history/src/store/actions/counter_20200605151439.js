import * as ActionTypes from '../actions/actionTypes'

export const increment = () => {
    return {
        type: ActionTypes.ActionTypesINCREMENT
    }
}

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ActionTypes.ADD,
        val: value

    }
}

export const subtract = (value) => {
    return {
        type: ActionTypes.SUBTRACT,
        val: value
    }
}