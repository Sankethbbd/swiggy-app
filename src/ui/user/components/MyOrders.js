import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from '../../common/components/Navbar';
import "../static/MyOrders.css";
import Header from './OrdersHeader';

const MyOrders = () => {
  const location = useLocation(); 

  console.log(location.state);
  return (
    <div>
        <Header />
        <div className="empty-order">
            <p><strong>Your order is empty!</strong></p>
            <p>Add drinks to your order to get started!</p>
            <Link to="/">
            <button className="view-menu-button">View drinks menu</button>
            </Link>
        </div>
        <div className='navbar-spacing'> 
            <Navbar />
        </div>
    </div>
  );
};

export default MyOrders;
