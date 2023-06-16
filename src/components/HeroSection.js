import React from 'react'
import '../css/mainArea.css';
import priceImg from '../Assets/priceImg.png'
import marketImg from '../Assets/marketImg.jpg'
import farmingImg from '../Assets/farmingImg.jpg'
import comapnyImg from '../Assets/comapnyImg.jpg'

export default function HeroSection() {
  return (
    <div className='heroSection'>
      <div className="banner">
        <h3>Price Prediction</h3>
        <img src={priceImg} alt="" />
      </div>
      <div className="banner">
        <img src={marketImg} alt="" />
        <h3>Price Prediction</h3>
      </div>
      <div className="banner">
        <h3>Price Prediction</h3>
        <img src={farmingImg} alt="" />
      </div>
      <div className="banner">
        <img src={comapnyImg} alt="" />
        <h3>Price Prediction</h3>
      </div>
    </div>
  )
}
