import React, { useState } from "react";
import { dist } from "../Assets/cropImages/Data";
import "../css/authPage.css";
import userPic from '../Assets/userPic.jfif'

export default function UserProfile() {
  const [userName, setUserName] = useState("Roshan Bende");
  const [district, setDistrict] = useState("Nagpur");
  const [userCity, setcity] = useState("Nagpur");
  const [userMobile, setmobileNo] = useState(8687857483);

  return (
    <div className="userProfile">
      <h2>User Profile</h2>
      <div className="farmer">
              <img src={userPic} alt="" srcset="" />
              <div className="farmerName">
                <h3>{userName}</h3>
                <span>{district},Maharastra</span>
              </div>
            </div>
      <form>
        <input
          type="text"
          name="farmerName"
          id="farmerName"
          value={userName}
        />
        <input
          type="text"
          name="mobileNo"
          id="mobileNo"
          value={userMobile}
        />
        <select name="distict" id="distict">
          {dist.map((data) => (
            <option value={data}>{data}</option>
          ))}
        </select>
        <input
          type="text"
          name="city"
          id="city"
          value={userCity}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <input
          type="re-password"
          name="re-password"
          id="re-password"
          placeholder="Re-Enter Password"
        />
      </form>
      <button
        onClick={() => {
          
        }}
      >
       Update
      </button>
    </div>
  );
}
