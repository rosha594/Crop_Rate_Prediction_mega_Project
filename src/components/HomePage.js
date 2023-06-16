import React, { useState, useEffect, useRef } from "react";
import Chart from "react-apexcharts";
import "../css/homePage.css";
import { cropData } from "../Assets/cropImages/Data";

import CurrentPriceTrend from "../components/CurrentPriceTrend";
import StatusChart from "./StatusChart";
import DetailsBlock from "./DetailsBlock";

export default function HomePage() {
  const chartRef = useRef(null);
  const [tabledate, setdate] = useState()
  const [tabledata, setdata] = useState();
  const [tablerate, setrate] = useState();

  const handleData = (e, i) => {
    
    const data = cropData.find((obj) => obj.cropName === i);
    if (data.cropName === i) {
      setdate(data.Date.map((e) => <tr>{e}</tr>));
      setdata(data.prices.map((e) => <tr>{e}</tr>));
      // setrate(data.changeRate.map((e) => <tr>{e}%</tr>));
    }
  };

  return (
    <div className="homePage">
      <CurrentPriceTrend onclick={handleData} />
      <div className="sideBlock">
        <div className="statusChart">
          <table className="tableHead">
            <tr>
              <th>Date</th>
              <th>Price Per Qtl.</th>
              {/* <th>Change Rate</th> */}
            </tr>
            <tr>
              <td>{tabledate}</td>
              <td>{tabledata}</td>
              <td>{tablerate}</td>
            </tr>
          </table>
        </div>
        {/* <DetailsBlock /> */}
      </div>
    </div>
  );
}
