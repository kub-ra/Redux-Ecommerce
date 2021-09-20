import {combineReducers} from 'redux'
import changecategoryReducer from './changecategoryReducer'
import categoryListReducer from './categoryListReducer'

const rootReducer=combineReducers({
    changecategoryReducer,categoryListReducer
})
export default rootReducer;