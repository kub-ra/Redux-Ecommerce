import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var added=state.find(c=>c.product.id===action.payload.product.id)
            if(added){
                var newState=state.map(cartItem=>{
                    if(cartItem.product.id===action.cartItem.product.id){
                        return Object.assign({},added,{quantity:added.quantity+1})
                    }
                    return cartItem;
                })
                return newState;
            }else{
                return [...state,{...action.payload}]
            }
        

        default:
            return state;
    }
}