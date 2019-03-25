import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;

const initialState = {subValue: {
  value: 40
}};

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    devtools
  ));

export default store;