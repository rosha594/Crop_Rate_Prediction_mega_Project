import React from 'react'
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


export default function MainArea() {
  return (
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
                    <MyCropPage/>
                </Route>
                <Route path='/mandis'>
                    <MarketViewPage/>
                </Route>                
                <Route path='/authPage'>
                    
                    <AuthPage/>
                </Route>
                <Route path='/userProfile'>
                    <UserProfile/>
                </Route>
                <Route path='/'>                    
                    <HomePage />
                </Route>

            </Switch>
        
    </div>
  )
}
