import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// muy own middle 
const logger = store => {
    return (next => {
        return (action => {
            console.log('in middleware==> ', action)
            const result = next(action)
            console.log('in middleware next state==> ', store.getState())
            return result
        })
    })
}
// second parameter can be enhancer- we can provide a list of middle wares
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
