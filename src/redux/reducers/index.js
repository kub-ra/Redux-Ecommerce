import {combineReducers} from 'redux'
import changecategoryReducer from './changecategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import saveProductReducer from './saveProductReducer'

const rootReducer=combineReducers({
    changecategoryReducer,categoryListReducer,productListReducer,cartReducer,saveProductReducer
})
export default rootReducer;