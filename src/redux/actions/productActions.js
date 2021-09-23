import * as actionTypes from './actionTypes'


export function getProductSucces(products) {
    return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: products }
}
export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}
export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}
export async function handleResponse(responce){
    if(responce.ok){
        return responce.json();
    }
    const error=await responce.text()
    throw new Error(error)
}
export function handleError(error){
    console.log("Bir hata oluştu")
    throw error;
}
export function saveProductApi(product) {
    return fetch(" http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST", headers: { "content-type": "aplication/json" }, body: JSON.stringify(product)
    }).then(handleResponse).catch(handleError);
}
export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(savedproduct => {
            product.id ? dispatch(updateProductSuccess(savedproduct)) : dispatch(createProductSuccess(savedproduct));
         }).catch(error=>{throw error})
    }

}
export function getProducts(categoryId) {
    return function (dispatch) {
        let url = " http://localhost:3000/products"
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductSucces(result)))
    }
}