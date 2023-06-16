import React from 'react'
import '../css/mainBlock.css'
import MainArea from '../components/MainArea'
import UserArea from '../components/UserArea'


//UserArea links
import { Link } from "react-router-dom";
import "../css/userArea.css";
import UBImage from "../Assets/UBImage.png";
import userPic from "../Assets/userPic.jfif";

// MainArea Links
import {Switch, Route} from "react-router-dom"
import '../css/mainArea.css'
import HomePage from '../components/HomePage'
import PredictionPage from '../pages/PredictionPage'
import WeatherPage from '../pages/WeatherPage'
import MyCropPage from '../pages/MyCropPage'
import MarketViewPage from '../pages/MarketViewPage'
import AuthPage from '../pages/AuthPage'
import CropPriceResult from './CropPriceResult'
import UserProfile from '../components/UserProfile'
import { useState } from 'react'

//AuthLinks
import {useEffect } from "react";
import { useHistory} from "react-router-dom";
import "../css/authPage.css";

import { dist } from "../Assets/cropImages/Data";

//userProfile LInks
// import { dist } from "../Assets/cropImages/Data";
// import "../css/authPage.css";
// import userPic from '../Assets/userPic.jfif'
import { userData } from '../Assets/cropImages/userData';

export default function MainBlock() {

// UserAReaLogic
  const [authStatus, setAuthStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [district, setDistrict] = useState("");
  const changeAuth1 = () => {
    setAuthStatus(true);
    console.log(authStatus)
  }

  // Auth Logic
  const [authImg, setAuthImg] = useState(true);
  const { changeAuth, authstatus } = false;

  const history = useHistory();

  // useEffect(() => {
  //   if (authstatus === true) {
  //     history.push("/");
  //   }
  // }, [authstatus, history]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = userData.find(obj => obj.mobileNO === mobileNO)
    setUser_Name(data?data.user_Name:"")
    setUserName(data?data.user_Name:"")
    console.log(user_Name)
    setAuthStatus(true);
    console.log(authStatus)
    history.push("/");
  }


  // userProfile Logic
  const [user_Name, setUser_Name] = useState();
  const [district_, setDistrict_] = useState();
  const [userCity, setcity] = useState();
  const [userMobile, setmobileNo] = useState();

  const [mobileNO,setno] = useState();
  const [pass,setpass] = useState();

  return (
    <div className='mainBlock'>
      {/* <UserArea/>
      <MainArea/> */}

{/* UserArea */}
<div className="userArea">
      <div className="userBlock">
        {!authStatus ? (
          <div className="auth-Block">
            <Link to="/authPage" style={{textDecoration:'none'}} changeAuth1={changeAuth} authStatus={authStatus}>
              <div className="loginBtn">Log In</div>
            </Link>
            <img src={UBImage} alt="" />
          </div>
        ) : (
          <div className="userProfileBlock">
            <div className="user">
              <img src={userPic} alt="" srcset="" />
              <div className="userName">
                <h4>{userName}</h4>
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
              <div className="btn1" onClick={() => {setAuthStatus(false);history.push("/"); }}>Log Out</div>
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
{/* MainArea */}
<div className='mainArea'>
    
    <Switch>
        <Route path='/priceprediction'>
            <PredictionPage/>
            {/* <CropList/> */}
        </Route>
        <Route path='/result'>
            <CropPriceResult/>
        </Route>
        <Route path='/weather'>
            <WeatherPage/>
        </Route>
        <Route path='/mycrop'>
            <MyCropPage userName = {userName} district={district_}/>
        </Route>
        <Route path='/mandis'>
            <MarketViewPage/>
        </Route>                
        <Route path='/authPage'>
            
            {/* <AuthPage/> */}
            <div className={authImg ? "authPage" : "authPage authPage2"}>
      <div className="block">
        <div className={authImg ? "loginImg" : "singupImg"}>
          {authImg ? (
            <div className="loginImgda">
              <h2>Welcome</h2>
              <img src={require("../Assets/loc.png")} alt="" className="loc" />
              <h3>Log in to your Account to Track your Farm...</h3>
              <img src={require("../Assets/log1.png")} alt="" />
            </div>
          ) : (
            <div className="singupImgda">
              <h2>Register Yourself</h2>
              <img
                src={require("../Assets/regbook.png")}
                alt=""
                className="loc"
              />
              <h3>Connect with us to boost your farming...</h3>
              <img src={require("../Assets/reg.png")} alt="" />
            </div>
          )}
        </div>
        <div className={authImg ? "login" : "login2"}>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="mobileNo"
              id="mobileNo"
              placeholder="Enter Mobile Number"
              onChange={(e) => setno(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />

            <Link to='/'><button onClick={() => {
              // event.preventDefault();
              const data = userData.find(obj => obj.mobileNO === mobileNO)
              setUser_Name(data?data.user_Name:"")
              setUserName(data?data.user_Name:"")

              setDistrict(data?data.district_ :"")
              setDistrict_(data?data.district_ :"")

              setcity(data?data.userCity:"")
              
              setmobileNo(data?data.mobileNO:"")
              console.log(user_Name)
              setAuthStatus(true);
              console.log(authStatus)
              history.push("/");
            }}>Log In</button></Link>
          </form>
          <div className="signupLink">
            Don't have account yet...{" "}
            <button
              onClick={() => {
                setAuthImg(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className={authImg ? "signup" : "signup2"}>
          <h2>Sign Up</h2>
          <form>
            <input
              type="text"
              name="farmerName"
              id="farmerName"
              placeholder="Enter Your Name"
            />
            <input
              type="text"
              name="mobileNo"
              id="mobileNo"
              placeholder="Enter Mobile Number"
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
              placeholder="Enter Your City"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <input
              type="password"
              name="re-password"
              id="re-password"
              placeholder="Re-Enter Password"
            />
          </form>
          <button
            onClick={() => {
              setAuthImg(true);
            }}
          >
            {/* update authstatus in userArea page */}
            Sign Up
          </button>
        </div>
      </div>
    </div>
        </Route>
        <Route path='/userProfile'>
            {/* <UserProfile/> */}


  
    <div className="userProfile">
      <h2>User Profile</h2>
      <div className="farmer">
              <img src={userPic} alt="" srcset="" />
              <div className="farmerName">
                <h3>{user_Name}</h3>
                <span>{district_},Maharastra</span>
              </div>
            </div>
      <form>
        <input
          type="text"
          name="farmerName"
          id="farmerName"
          value={user_Name}
        />
        <input
          type="text"
          name="mobileNo"
          id="mobileNo"
          value={userMobile}
        />
        <select name="distict" id="distict" value={district_}>
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
        </Route>
        <Route path='/'>                    
            <HomePage />
        </Route>

    </Switch>

</div>
    </div>
  )
}
