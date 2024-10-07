import React, { useEffect, useState } from "react";
import FrontPage from '../../common/components/FrontPage';
import { SlArrowRight } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../static/AllOffices.css";
import Coffeebean from "../../common/images/coffeebean.png";
import { allLocation } from "../../../services/locationService";
 
export default function AllOffices() {
    const navigate = useNavigate()
    const [offices, setOffices] = useState([]);
 
    useEffect(() => {
        allLocation(setOffices)
    }, [offices])
 
  return (
    <div className="container">
        <div className="frontpage-container">
            <FrontPage/>
        </div>
        <div className="alloffices-container">
            <div className='alloffices'>
                <h3 className="pick-location">Pick your location</h3>
                    {offices.map((locate, index) => (
                        <div className="mapping" key={index}>
                            <Link
                                to={`/product`}
                                state={locate}
                                className="location-option"
                            >
                                <img src={Coffeebean} className="coffeebean" />
                                <span>{locate.officeName}</span>
                                <div className="arrow">
                                    <SlArrowRight />
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}