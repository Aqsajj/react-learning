import * as ActionTypes from '../actions/actionTypes'

export const addIngredient = (name) => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: ActionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}