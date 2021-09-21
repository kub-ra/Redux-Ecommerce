import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import {
   
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink
  } from 'reactstrap';
import { Link } from 'react-router-dom';

 class CartSummary extends Component {
     renderEmpty(){
       return(
         <NavItem>
           <NavLink>Sepet Boş</NavLink>
           </NavItem>
       )
     }
    
     renderSummary(){
       return (
      <UncontrolledDropdown  nav inNavbar>
      <DropdownToggle nav caret>
        Sepetiniz
      </DropdownToggle>
      <DropdownMenu right>
      {this.props.cart.map(cartItem=>(
          <DropdownItem key={cartItem.product.id}>
            <span onClick={()=>this.props.actions.removeFromCart(cartItem.product)} class="badge bg-danger text-white">X</span>
          {cartItem.product.productName} 
          <span class="badge bg-info text-white">  {cartItem.quantity}</span>
        </DropdownItem>

        ))}
        
        
        <DropdownItem divider />
        <DropdownItem>
          <Link to="/cart">Sepete Git</Link>
          
        </DropdownItem>
       
      </DropdownMenu>
    </UncontrolledDropdown>)
        

     }
    
    render() {
        return (
            <div>
              {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
                  
            </div>
        )
    }
}
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
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)
