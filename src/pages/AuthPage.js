import React, { useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import "../css/authPage.css";

import { dist } from "../Assets/cropImages/Data";

export default function AuthPage(props) {
  const [authImg, setAuthImg] = useState(true);
  const { changeAuth, authstatus } = props;

  const history = useHistory();

  useEffect(() => {
    if (authstatus === true) {
      history.push("/");
    }
  }, [authstatus, history]);

  function handleSubmit(event) {
    event.preventDefault();
    changeAuth();
    history.push("/");
  }
  return (
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
              type="text"
              name="mobileNo"
              id="mobileNo"
              placeholder="Enter Mobile Number"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />

            <Link to='/'><button onClick={() => changeAuth()}>Log In</button></Link>
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
  );
}
