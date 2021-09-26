import React  from 'react'
import { Link } from 'react-router-dom';
import style from './styles.module.css'

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
        <NavbarBrand><Link className={style.link} to="/">Northwind Mağazası</Link></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{marginLeft:"620px"}}>
              <NavLink ><Link className={style.link}to="/product">Kategoriler</Link>
                </NavLink>
            </NavItem>
            <NavItem style={{marginLeft:"25px"}}>
              <NavLink ><Link  className={style.link} to="/saveproduct">Ürün Ekle</Link></NavLink>
            </NavItem>
            <CartSummary/>
          
          </Nav>
          
        </Collapse>
      </Navbar>
                
            </div>
        )
    }
}
