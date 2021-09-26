import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import { Table ,Button} from 'reactstrap'
import alertify from 'alertifyjs'
import {Link} from 'react-router-dom'


class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()

    }
    addToCart=(product)=>{
        this.props.actions.addToCart({quantity:1,product})
        alertify.success(product.productName + "sepete eklendi")

    }
    render() {
        return (
            <div>
                <h3> <span class="badge bg-warning text-dark">ProductList</span>
                    <span class="badge bg-info text-white">{this.props.currentCategory.categoryName}</span></h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit in Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product => (
                        <tr key={product.id}>
                           
            <th scope="row">{product.id}</th>
             <td> <Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
              <td>{product.unitPrice}</td>
               <td>{product.quantityPerUnit}</td>
               <td>{product.unitsInStock}</td>
               <td> <Button onClick={()=>this.addToCart(product)} color="success">Sepete Ekle</Button></td>

                           

                        </tr> ))}

                    </tbody>
                </Table>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changecategoryReducer,
        products:state.productListReducer
    }

}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
