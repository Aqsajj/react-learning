// nodejs code just for understanding
const redux = require('redux')

const reduxStore = redux.createStore; // function but not executed yet

const initialState = {
    counter: 0
}
// reducer
const rootReducer = (state = initialState, action) => {
    return state
}
// store
const store = reduxStore(rootReducer) // store needs to be initialized with a reducer +
console.log("TCL: store", store.getState())

// dispatching action
store.dispatch({
    type: 'INCREMENT_COUNTER'

})// takes a javascript object as argument type is a must 
//subscription