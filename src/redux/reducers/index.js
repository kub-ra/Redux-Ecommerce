import {combineReducers} from 'redux'
import changecategoryReducer from './changecategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'

const rootReducer=combineReducers({
    changecategoryReducer,categoryListReducer,productListReducer
})
export default rootReducer;