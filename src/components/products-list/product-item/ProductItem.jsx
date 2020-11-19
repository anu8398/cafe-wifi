import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, ListGroupItem, ListGroup } from 'reactstrap'

const ProductItem = props => {
    
    const { id, img, title, rating, offerPrice, price, desc } = props.details

    return (
        <Link to={`/ViewProduct/${id}`} className="pd-link">
        <ListGroup >
        <ListGroupItem key={id} className="mb-4 shadow-sm" style={{width : 250, height : 250}}>

            <Row >
            
                <Col >
                    <img src={img} className="product-img w-100" alt="product"/>
                    <h5 className="mb-0 d-inline-block">{title}</h5><br />  
                    <h2 className="d-inline-block mr-2">&#x20b9;{offerPrice}</h2>
                </Col>

               

            </Row>

        </ListGroupItem>
        </ListGroup>
        </Link>
    )
}

export default ProductItem
