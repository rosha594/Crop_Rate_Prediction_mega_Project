import React from "react";
import CropPriceResult from "../components/CropPriceResult";
import "../css/marketviewPage.css";

export default function MarketViewPage() {

  const dist = [
    "District",
    "Amaravati",
    "Akola",
    "Aurangabad",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Gadchiroli",
    "Gondia",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Pune",
    "Wardha",
  ];

  const crop=["arhar", "urad","wheat","paddy","bajara", "barley", "copra","gram", "groundnut", "jowar", "lentil","maize","moong", "mustard", "nigerseed", "ragi", "rawcotton","rawjute","safflowerseed", "sesamum","soyabean", "sugarcane","sunflowerseed","toria"]
  return (
    <div className="marketviewPage">
      <h2>Mandi View</h2>
      <CropPriceResult/>
    </div>
  );
}
