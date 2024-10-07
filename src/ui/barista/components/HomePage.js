import React, { useState } from 'react'
import FrontPage from '../../common/components/FrontPage'
import "../static/HomePage.css"
import { Navigate, useNavigate } from 'react-router-dom';
export default function HomePage() {
    const [isAcceptingOrders,setIsAcceptingOrders]=useState(true);
    const navigate=useNavigate();

    const changeCss=()=>{
        setIsAcceptingOrders(!isAcceptingOrders);
        navigate(`/take-orders`);
    };
  return (
    <div className='homepage-container'>
        <div className='left-homepage'>
            <FrontPage/>
        </div>
        <div className='right-homepage'>
            <button className={isAcceptingOrders?'barista-avail':'change-color'} onClick={changeCss}>
                {isAcceptingOrders? 'Accepting orders': 'Closed for orders'} 
            </button>
            <button className='barista-not-avail' onClick={changeCss}>
                {isAcceptingOrders? 'Closed for orders': 'Open for orders'} 
            </button>
        </div>
    </div>
  )
}
