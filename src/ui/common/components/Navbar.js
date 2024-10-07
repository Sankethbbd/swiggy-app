import React from 'react'
import "../static/Navbar.css"
import { PiHouseFill } from "react-icons/pi";
import { IoBag } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className='nav'>
        <div className='navbar'>
            <button className='home-button' onClick={() => navigate('/')}>
                <PiHouseFill/> 
            </button>
            <button className='cart-button' onClick={() => navigate('/check-out')}>
                <IoBag/>
            </button>
            
        </div>
    </div>
  )
}
