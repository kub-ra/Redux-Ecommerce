import {combineReducers} from 'redux'
import changecategoryReducer from './changecategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'

const rootReducer=combineReducers({
    changecategoryReducer,categoryListReducer,productListReducer,cartReducer
})
export default rootReducer;