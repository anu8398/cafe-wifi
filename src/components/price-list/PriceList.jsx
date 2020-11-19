import React from 'react'
import './PriceList.css'
import {ListGroup, ListGroupItem, Button} from 'reactstrap'
import WifiCard from '../wifi-card/WifiCard'

const PriceList = props => {

    const { totalItems, totalPrice ,cartItems, } = props

    return (
        <>
        <ListGroup className="shadow-sm mb-4">
            
            <ListGroupItem>Price ( {totalItems} item )<span className="float-right">&#x20b9;{totalPrice}</span></ListGroupItem>

            <ListGroupItem color="success"><b>TOTAL AMOUNT<span className="float-right">&#x20b9;{totalPrice}</span></b></ListGroupItem>
            
            <WifiCard />
        </ListGroup>
        {/* <Button outline color="primary" onClick={window.print()}>primary</Button>{' '} */}
        </>
    )
}

export default PriceList
