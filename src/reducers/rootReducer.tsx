import { combineReducers } from 'redux'
import albumReducer from './albumReducer'
import signReducer from './signReducer'

export default combineReducers({
    albumReducer,
    signReducer
})