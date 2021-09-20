import * as actionTypes from './actionTypes'

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORİES,payload:category}
}
export function getCategoriesSucces(categories){
    return {type:actionTypes.GET_CATEGORİES_SUCCESS,payload:categories}
}
export function getCategories(){
    return function(dispatch){
        let url=" http://localhost:3000/categories"
        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getCategoriesSucces(result)))
    }
}