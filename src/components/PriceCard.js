import React from "react";
import "../css/priceCard.css";

import crop_Img from "../Assets/crop_Img.jpg";

export default function PriceCard() {
  const crop_Name = "Soya";
  const crop_type = "Rabbi";
  const Price = 1300;
  const date = new Date();
  const city = "Nagpur";
  const price_stat = "7.8%";

  return (
    <div className="priceCard">
      <div className="crop">
        <img src={crop_Img} alt="" />
        <div className="cropTitle">
          <h2>{crop_Name}</h2>
          <span>{crop_type}</span>
        </div>
      </div>

      <div className="cropDetails">
        <div>
          <span>Average Price </span>
          <span>₹ {Price} / Q.</span>
          <span>
            
            {date.getDate()} {date.getMonth()} {date.getFullYear()}
          </span>
          <span> {city}</span>
        </div>
        <div>
          {price_stat}
          <button>Price Stack</button>
        </div>
      </div>
    </div>
  );
}
