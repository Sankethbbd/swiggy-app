import React, { useEffect, useState } from 'react';
import '../static/CheckOut.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../common/components/Navbar';
import { placeOrders } from '../../../services/orderListService';

const CheckOut = () => {
    const userID = 1056;
    const navigate = useNavigate();
    const location = useLocation();
    const [isEmpty, setIsEmpty] = useState(false);

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() => {
        if (cart.length === 0) setIsEmpty(true)
    }, [])

    const increaseCount = (index) => {
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        navigate(location.path)
    };

    const decreaseCount = (index) => {
        if (cart[index].quantity != 0) {
            cart[index].quantity -= 1;
        } else {
            let newCart = []
            for(let i = 0; i < cart.length; i++) {
                if (cart[i] != cart[index]) newCart.push(cart[i]);
            }
            cart = newCart
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cart));
        if (JSON.parse(localStorage.getItem("cart")).lenghth === 0) {
            setIsEmpty(true)
        }
        navigate(location.path)
    };

  return (
    <div className="order-page">
        <div className="header">
            <div className="header-item active">Place an order</div>
            <div className="header-item">My orders</div>
        </div>

        {isEmpty
        ? <div className="empty-order">
            <p><strong>Your order is empty!</strong></p>
            <p>Add items to your order to get started!</p>
            <Link to="/">
                <button className="view-menu-button">View drinks menu</button>
            </Link>
        </div>
        : <div>
            {cart.map((order, index) => 
                <div className="order-item">
                    <img src={order.imageURL} className="item-image" />
                    <div className="item-details">
                        <div className="item-name">{order.productName}</div>
                        <div className="item-milk-type">{order.milkTypeValue}</div>
                        <div className="item-note">- {order.note}</div>
                    </div>
                    <div className="item-counter">
                        <button onClick={() => decreaseCount(index)}>-</button>
                        <span>{order.quantity}</span>
                        <button onClick={() => increaseCount(index)}>+</button>
                    </div>
                </div>
            )}
            
            <button className="place-order" onClick={() => {
                if (cart != [] && cart !=null) {
                    placeOrders(cart);
                    localStorage.removeItem("cart");
                    setIsEmpty(true)
                    navigate(location.path)
            }}}>Place order</button>
        </div>}
        
        <div className='content'>
            <Navbar/>     
        </div>
    </div>
  );
};

export default CheckOut;
