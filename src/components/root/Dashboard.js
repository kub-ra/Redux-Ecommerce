import React, { Component } from 'react'
import { Col,  Row } from 'reactstrap'

import ProductList from '../product/ProductList'
import CategoryList  from '../categories/CategoryList'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                
                    
                    <Row>
                        <Col xs="3"><CategoryList/></Col>
                        <Col xs="9"><ProductList/></Col>
                    </Row>
             
                
            </div>
        )
    }
}
