import { combineReducers } from 'redux';
import assetReducer from './assetReducer'
import LoginReducer from './LoginReducer'

export default combineReducers({

    asset: assetReducer,
    login: LoginReducer
})