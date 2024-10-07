import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import '../static/OrderHistory.css';
import PlaceOrder from '../components/PlaceOrder';
import OrdersHeader from '../components/OrdersHeader';
import { RiArrowDropDownLine } from "react-icons/ri";

const UserOrderHistory = ({ userIDx = 1025, orderStatusValue = "" }) => {
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
            <div className="order-container">
                <OrdersHeader />
                <div className="order-section">
                    <div className="order-section-title">In Progress</div>
                    <hr />
                    {orders.map(order => (
                        <React.Fragment key={order.ID}>
                            <div className='containing'>
                            <div className="order-item">
                                <div className="order-header" onClick={() => toggleOrderDetails(order.userName)}>
                                    <span>{`Order Number: ${order.orderID}`}</span>
                                    <button
                                        className="order-status"
                                        style={{ backgroundColor: getStatusColor(order.status) }}
                                    >
                                        {order.status || 'Unknown'}
                                    </button>
                                    <RiArrowDropDownLine className="dropdown-arrow" />
                                </div>
                            </div>
                            <div className={`order-details ${expandedUserID === order.userName ? 'show' : ''}`}>
                                    <li>{`${order.quantity} ${order.productName}`}</li>
                                    <p>Milk: {order.milkTypeValue || 'None'}</p>
                                    {order.note && <p>Notes: {order.note}</p>}
                            </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="footer">
                <div className="footer-icon home-icon"></div>
                <div className="footer-icon order-icon active"></div>
            </div>
        </div>
    );
};

export default UserOrderHistory;
