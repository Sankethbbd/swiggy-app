import React, { useEffect, useState } from 'react'
import { detailsForBarista } from '../../../services/baristaDisplayService';
import { useNavigate } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

const OrderLists = ({status}) => {
    const navigate =useNavigate()
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        detailsForBarista(1, status, setOrderDetails);
    }, [])
  return (
    <div>
        <div className="order-section">
            <h3>{status} acceptance</h3>
            {orderDetails.map((order, index) => 
            <button className="order-item" key={index} onClick={() => navigate('/order-details', { state: order })}>
                <p>Order number: {order.orderID}</p>
                <p className="order-time">Received at {order.orderTime}</p>
                <span className="order-arrow"><SlArrowRight/></span>
            </button>)}
        </div>
    </div>
  )
}

export default OrderLists