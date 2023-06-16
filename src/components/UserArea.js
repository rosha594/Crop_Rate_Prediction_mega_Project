import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/userArea.css";
import UBImage from "../Assets/UBImage.png";
import userPic from "../Assets/userPic.jfif";

export default function UserArea() {
  const [authStatus, setAuthStatus] = useState(false);
  const [userName, setUserName] = useState("Roshan Bende");
  const [district, setDistrict] = useState("Nagpur");


  const changeAuth = () => {
    setAuthStatus(true);
    console.log(authStatus)
  }
  
  return (
    <div className="userArea">
      <div className="userBlock">
        {!authStatus ? (
          <div className="auth-Block">
            <Link to="/authPage" style={{textDecoration:'none'}} changeAuth={changeAuth} authStatus={authStatus}>
              <div className="loginBtn">Log In</div>
            </Link>
            <img src={UBImage} alt="" />
          </div>
        ) : (
          <div className="userProfileBlock">
            <div className="user">
              <img src={userPic} alt="" srcset="" />
              <div className="userName">
                <h3>{userName}</h3>
                <span>{district},Maharastra</span>
              </div>
            </div>
            <Link
              to="/userProfile"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "700",
                color: "black",
                margin:'20px'
              }}
            >
              <div className="btn1">Profile Settings</div>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "700",
                color: "black",
                
              }}
            >
              <div className="btn1" onClick={() => setAuthStatus(false)}>Log Out</div>
            </Link>
          </div>
        )}
      </div>
      <div className="priceStatusBlock">
        <div className="topGainers">
          <h4>Top Gainers</h4>
          <div>
            <table className="tableHead">
              <tr>
                <th>Commodity</th>
                <th>Price Per Qtl.</th>
                <th>Change Rate</th>
              </tr>
            </table>
          </div>
          <div className="gainersList">
            <table>
              <tr>
                <td>Niger</td>
                <td>2100/-</td>
                <td>
                  5.4<span>%</span>
                  <span className="gainerImg"></span>
                </td>
              </tr>
              <tr>
                <td>Mustud</td>
                <td>2200/-</td>
                <td>
                  3.4<span>%</span>
                  <span className="gainerImg"></span>
                </td>
              </tr>
              <tr>
                <td>Seasamum</td>
                <td>2040/-</td>
                <td>
                  5.2<span>%</span>
                  <span className="gainerImg"></span>
                </td>
              </tr>
              <tr>
                <td>Ragi</td>
                <td>1900/-</td>
                <td>
                  5.4<span>%</span>
                  <span className="gainerImg"></span>
                </td>
              </tr>
              
            </table>
          </div>
        </div>
        <div className="topLossers">
          <h4>Top </h4>
          <div>
            <table className="tableHead">
              <tr>
                <th>Commodity</th>
                <th>Price Per Qtl.</th>
                <th>Change Rate</th>
              </tr>
            </table>
          </div>
          <div className="lossersList">
            <table>
              <tr>
                <td>Paddy</td>
                <td>2130/-</td>
                <td>
                  2.4<span>%</span>
                  <span className="losserImg"></span>
                </td>
              </tr>
              <tr>
                <td>Raw Jute</td>
                <td>2200/-</td>
                <td>
                  1.4<span>%</span>
                  <span className="losserImg"></span>
                </td>
              </tr>
              <tr>
                <td>Toria</td>
                <td>1600/-</td>
                <td>
                  3.4<span>%</span>
                  <span className="losserImg"></span>
                </td>
              </tr>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
