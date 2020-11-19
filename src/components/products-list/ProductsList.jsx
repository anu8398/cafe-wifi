import React from 'react'
import {ListGroup} from 'reactstrap'
import {Container, Row, Col, CardDeck} from 'react-bootstrap'
import ProductItem from './product-item/ProductItem'

const ProductsList = props => {

    const { products } = props

    return (

        <Container  fluid="md" style={{marginTop: "2.8rem", marginRight : "2.8rem"}}>
         <Row className="justify-content-md-center" >
        <Col xs={4} md={3} lg={true} > 
            <CardDeck>
            {
                products.map(prod => <ProductItem key={prod.id} details={prod} />)
            }

            </CardDeck>
        </Col>
        </Row> 
        </Container>
        
    )
}

export default ProductsList
