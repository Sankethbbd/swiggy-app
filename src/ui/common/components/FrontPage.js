import React from "react";
import backgroundimg from "../../common/images/front-page-backgroundimg.png";
import "../static/FrontPage.css";
import bbdlogo from "../../common/images/bbdlogo.png"
function FrontPage() {
  return (
    <div className="Front-page">
        <img src={backgroundimg} alt="background"  className="backgroundimg1" /> 
        <div className="upper-text">Coffee at</div>
        <img className="bbdlogo" src={bbdlogo} alt="bbdlogo"/>
        <div className="background-text">Order your coffee from your office barista ,any time, any place </div>       
    </div>
  );
}

export default FrontPage;
