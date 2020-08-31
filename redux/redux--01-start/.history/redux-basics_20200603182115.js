// nodejs code just for understanding
const redux = require('redux')

const reduxStore = redux.createStore; // function but not executed yet

// reducer
const rootReducer = (state, action) => {
    return state
}
// store
const store = reduxStore(rootReducer) // store needs to be initialized with a reducer +


// dispatching action

//subscription