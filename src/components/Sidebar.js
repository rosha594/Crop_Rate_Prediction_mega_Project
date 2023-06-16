import React from 'react'
import '../css/sideBar.css'
import '../css/mainBlock.css'
import logo from '../Assets/farmlogo1.jpg'


import MenuBtns from '../components/MenuBtns'
import decoImg from '../Assets/decoImg.png'

import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sideBar'>
      <Link to='/' style={{textDecoration:'none'}}>
      <div className="title">
        <img src={logo} alt="" srcset="" />
        <h1>KissanMitra</h1>
      </div>
      </Link>
      <img src={decoImg} alt='' className='decoImg'/>
      
      <MenuBtns/>
    </div>
  )
}
