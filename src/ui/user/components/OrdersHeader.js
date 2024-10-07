import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../static/CombinedOrders.css';

const Header = () => {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

  return (
    <header>
        <Link to="/place-order">
            <button className={`tab ${isActive('/place-order') ? 'active' : ''}`}>Place an order</button>
        </Link>
        <Link to="/my-orders">
            <button className={`tab ${isActive('/my-orders') ? 'active' : ''}`}>My orders</button>
        </Link>
    </header>
  );
};

export default Header;
