import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/LandingPage.css";

import Sidebar from "../components/Sidebar";
import MainBlock from "../components/MainBlock";

export default function LandingPage() {
  return (
    <div>
      <div className="loading"></div>
      <Router>
        <div  className="landing_page ">

        <Sidebar />
        <MainBlock />
        </div>
      </Router>
    </div>
  );
}
