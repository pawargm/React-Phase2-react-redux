import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import setAuthToken from './actions/setAuthToken';

const initialState = {};

const middleware = [thunk]

const store = createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

setAuthToken(localStorage.getItem('token'))

export default store;