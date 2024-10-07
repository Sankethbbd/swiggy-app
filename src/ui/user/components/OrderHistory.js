import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import '../static/OrderHistory.css';
import PlaceOrder from '../components/PlaceOrder';
import OrdersHeader from '../components/OrdersHeader';
import { RiArrowDropDownLine } from "react-icons/ri";
import Navbar from '../../common/components/Navbar';

const UserOrderHistory = ({ userIDx=1025, orderStatusValue = "" }) => {
    const [orders, setOrders] = useState([]);
    const [expandedUserID, setExpandedUserID] = useState(null);
    

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!userIDx) return;

                const response = await axios.get(`http://localhost:8080/bbd-coffee/order-list/past-orders/${userIDx}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [userIDx, orderStatusValue]);

    const toggleOrderDetails = (id) => {
        setExpandedUserID(expandedUserID === id ? null : id);
    };

    const getStatusColor = (status) => {
        if (!status) return 'gray';
        switch (status.toLowerCase()) {
            case 'pending':
                return 'gray';
            case 'in progress':
                return 'lightblue';
            case 'complete':
                return 'green';
            case 'cancelled':
                return 'red';
            case 'prepared':
                return 'green';
            default:
                return 'gray';
        }
    };

    if (orders.length === 0) {
        return <PlaceOrder />;
    }

    return (
        <div className="order-history">
            <OrdersHeader />
            <div className="order-section">
                <div className="order-section-title">Orders</div>
                {orders.map(order => (
                    <React.Fragment key={order.userName}>
                        <div className="order-item">
                            <div className="order-header" onClick={() => toggleOrderDetails(order.userName)}>
                                <span>{`Order by: ${order.userName}`}</span>
                                <div className="order-header-right">
                                    <button 
                                        className="order-status" 
                                        style={{ backgroundColor: getStatusColor(order.status) }}
                                    >
                                        {order.status || 'Unknown'}
                                    </button>
                                    <div className="dropdown-arrow">
                                        <RiArrowDropDownLine />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`order-details-container`}>
                            <div className={`order-items ${expandedUserID === order.userName ? 'show' : ''}`}>
                                <div className="list-item">
                                    <h3>{`${order.quantity} ${order.productName}`}</h3>
                                    <p><strong>Milk:</strong> {order.milkTypeValue || 'None'}</p>
                                    {order.note && <p><strong>Notes: {order.note}</strong></p>}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <Navbar/>
        </div>
    );
};

export default UserOrderHistory;
