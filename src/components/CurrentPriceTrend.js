import React from "react";
import "../css/homePage.css";
import {cropData} from '../Assets/cropImages/Data'

export default function CurrentPriceTrend({onclick}) {
    
  return (
    <div className="priceTrend">
      <div className="price-list">
        
        {cropData.map((x,i) => (

        <div className="list-item" key={i} onClick={(e) => onclick(e,x.cropName)}>
          <img src={x.path} alt="" />
          <div className="cropName">
            <span className="name">{x.cropName}</span>
            <span>{x.season}</span>
          </div>
            <div className="date">
              {new Date().toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          <div className="cropPrice">
            Avg. <span>₹ {x.price} /-</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
