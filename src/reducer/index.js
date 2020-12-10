import { combineReducers } from 'redux';
import courseReducer from './courseReducer'
import LoginReducer from './LoginReducer'

export default combineReducers({

    course: courseReducer,
    login: LoginReducer
})