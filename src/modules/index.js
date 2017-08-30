import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import singUpReducer from '../containers/sign-up/store'
export default combineReducers({
    routing: routerReducer,
    singUp: singUpReducer
})