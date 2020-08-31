import * as ActionTypes from '../actions/actionTypes'

const addIngredient = (name) => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}