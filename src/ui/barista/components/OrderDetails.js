import React, { useEffect } from 'react';
import '../static/OrderDetails.css';
import Navbar from '../../common/components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { cancelOrders, progressStatus } from '../../../services/updateStatusService';
import { MdKeyboardArrowLeft } from "react-icons/md";

const OrderDetails = () => {
    const location=useLocation();
    const navigate = useNavigate();
    const order = location.state;
    const searchParams = new URLSearchParams(location.search);
    let status = searchParams.get('status') || 'Pending';

    return (
        <div className="orderdetails-container">
            <div className="order-header">
                <button className="back-button" onClick={() => navigate(-1)}><MdKeyboardArrowLeft/></button>
                <span className="order-number">{order.orderID}</span>
                <span className="order-status">{status}</span>
            </div>

            <div className="order-items">
                <div className="list-item">
                    <h3>{order.quantity} {order.productName}</h3>
                    <p><strong>Milk:</strong> {order.milkTypeValue}</p>
                    <p><strong>Notes:</strong> {order.notes}</p>
                </div>
            </div>

            <div className="order-history">
                <h4>Order history</h4>
                <p>Time received: {order.orderTime}</p>
            </div>

            <div className="order-actions">
                <button 
                    className="decline-button"
                    onClick={() => {
                        cancelOrders(order.orderID)
                        navigate(`/take-orders`)
                    }}
                >Decline order</button>
                <button 
                    className="accept-button"
                    onClick={() => {
                        progressStatus(order.orderID)
                        navigate(`/take-orders`)
                    }}
                >Accept order</button>
            </div>
            <div className='content'>
                <Navbar />
            </div>
            
     
        </div>
    );
};

export default OrderDetails;
