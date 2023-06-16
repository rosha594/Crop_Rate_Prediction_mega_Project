import React from "react";
import { Link } from "react-router-dom";
import "../css/sideBar.css";

import home from "../Assets/home.png";
import prediction from "../Assets/forecast.png";
import weather from "../Assets/weather.png";
import mycrop from "../Assets/mycrop.png";
import market from "../Assets/market.png";
import company from "../Assets/company.png";

export default function MenuBtns() {
  return (
    <div className="menuBtn">    
      <Link to="/priceprediction" className="btn-row btn-row-prediction">
        <div className="icon">
          <img src={prediction} alt="" />
        </div>
        <div className="btn">Price Prediction</div>
      </Link>
      {/* <Link to="/weather" className="btn-row btn-row-weather">
        <div className="icon">
          <img src={weather} alt="" />
        </div>
        <div className="btn">Weather</div>
      </Link> */}
      <Link to="/mycrop" className="btn-row btn-row-mycrop">
        <div className="icon">
          
          <img src={mycrop} alt="" />
        </div>
        <div className="btn">My Crop</div>
      </Link>
      <Link to="/mandis" className="btn-row btn-row-mandi">
        <div className="icon">
          <img src={market} alt="" />
        </div>
        <div className="btn">Mandis</div>
      </Link>
      
    </div>
  );
}
