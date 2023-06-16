import React from 'react'
import '../css/priceCard.css'
import { useEffect, useState } from 'react';


import PriceCard from '../components/PriceCard'

export default function PriceSlider() {

  const [user, setUser] = useState("");

  useEffect(() => {
  setUser("Roshan")
   
  },[]);
  return (
    <div className='priceSlider slider'>
      <h2 style={{color:'white'}}>Current Market Status</h2>
      <div className='cardList'>
        {user}
      <PriceCard/>
      <PriceCard/>
      <PriceCard/>
      <PriceCard/>
      <PriceCard/>
      <PriceCard/>
      </div>
    </div>
  )
}
