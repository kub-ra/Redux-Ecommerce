import React  from 'react'
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    
    render() {
        
 
        return (
            <div>
                <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{marginLeft:"650px"}}>
              <NavLink ><Link to="/">Anasayfa</Link>
                </NavLink>
            </NavItem>
            <NavItem style={{marginLeft:"30px"}}>
              <NavLink ><Link to="/product">Kategoriler</Link></NavLink>
            </NavItem>
            <CartSummary/>
          
          </Nav>
          
        </Collapse>
      </Navbar>
                
            </div>
        )
    }
}
