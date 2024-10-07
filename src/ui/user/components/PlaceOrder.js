import React from 'react';
import Navbar from '../../common/components/Navbar';
import "../static/MyOrders.css";
import Header from './OrdersHeader';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  return (
    <div>
      <Header />
      <div className="empty-order">
        <p><strong> You haven’t made any orders!</strong></p>
        <p>Add drinks to your order to get started! View drinks menu</p>
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
