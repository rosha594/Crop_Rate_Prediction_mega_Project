import React from 'react'
import '../css/weatherPage.css'

export default function WeatherPage() {
  const date = new Date();
  return (
    <div className='weatherPage'>
      <span>{date.getDate()} {date.getMonth()} {date.getFullYear()} </span>
    </div>
  )
}
