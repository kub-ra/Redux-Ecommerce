import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as cartActions from '../../redux/actions/cartActions'
import { Table ,Button} from 'reactstrap'



class CartDetail extends Component {
    renderEmpty(){
        return(
            <h1> <span class="badge bg-warning text-dark">Sepetiniz Boş</span></h1>
          
        )
      }
      renderCartDetail(){
          return(
            <div>
                
            <h3> <span class="badge bg-warning text-dark">Sepetiniz</span></h3>
                
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.props.cart.map(cartItem => (
                    <tr key={cartItem.product.id}>
                       
        <th scope="row">{cartItem.product.id}</th>
         <td>{cartItem.product.productName}</td>
          <td>{cartItem.product.unitPrice}</td>
           <td>{cartItem.quantity}</td>
           
           <td> <Button onClick={()=>this.props.actions.removeFromCart(cartItem.product)} color="danger">Sil</Button></td>

                       

                    </tr> ))}

                </tbody>
            </Table>

        </div>
              
          )
      }

    
    
    render() {
        return (
            <div>{this.props.cart.length>0?this.renderCartDetail():this.renderEmpty()
            }
            </div>
            
        )
}}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
        
    }

}
function mapDispatchToProps(dispatch) {
  return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
      }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)

