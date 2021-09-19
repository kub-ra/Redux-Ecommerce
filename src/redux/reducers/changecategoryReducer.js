import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function changecategoryReducer(state = initialState.currentCategory, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORİES:
        return action.payload

        default:
            return state;
    }
}