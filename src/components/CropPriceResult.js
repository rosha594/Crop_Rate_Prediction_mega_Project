import React from 'react'
import '../css/predictionPage.css'

export default function CropPriceResult(props) {
 const {state} = props;
 
  return (
    <div className='cropPriceResult'>
      
      <table>
        <tr>
          <th>District</th>
          <th>Market</th>
          <th>Crop</th>
          <th>Price</th>
          
        </tr>
        <tr>
          <td>Nagpur</td>
          <td>Kalamana Market</td>
          <td>Arhar</td>
          <td>2250 /-</td>          
        </tr>
        
        <tr>
          <td>Nagpur</td>
          <td>Cotton Market</td>
          <td>arhar</td>
          <td>2210 /-</td>          
        </tr>
        <tr>
          <td>Nagpur</td>
          <td>Kalamana Market</td>
          <td>Bajara</td>
          <td>2450 /-</td>          
        </tr>
        
        <tr>
          <td>Nagpur</td>
          <td>Cotton Market</td>
          <td>Barjara</td>
          <td>2210 /-</td>          
        </tr>

        <tr>
          <td>Nagpur</td>
          <td>Kalamana Market</td>
          <td>Peddy</td>
          <td>2150 /-</td>          
        </tr>
        
        <tr>
          <td>Nagpur</td>
          <td>Cotton Market</td>
          <td>Peddy</td>
          <td>2140 /-</td>          
        </tr>

        <tr>
          <td>Nagpur</td>
          <td>Kalamana Market</td>
          <td>Wheat</td>
          <td>2450 /-</td>          
        </tr>
        
        <tr>
          <td>Nagpur</td>
          <td>Cotton Market</td>
          <td>Wheat</td>
          <td>2210 /-</td>          
        </tr>

        
        <tr>
          <td>Nagpur</td>
          <td>Kalamana Market</td>
          <td>Wheat</td>
          <td>2450 /-</td>          
        </tr>
        
        <tr>
          <td>Wardha</td>
          <td>Wardha Central Market</td>
          <td>Arhar</td>
          <td>2210 /-</td>          
        </tr>
        
        <tr>
          <td>Wardha</td>
          <td>Wardha Krushi Udyog</td>
          <td>Arhar</td>
          <td>2250 /-</td>          
        </tr>
        
        <tr>
          <td>Wardha</td>
          <td>Wardha Central Market</td>
          <td>Peddy</td>
          <td>2110 /-</td>          
        </tr>
        
        <tr>
          <td>Wardha</td>
          <td>Wardha Krushi Udyog</td>
          <td>Peddy</td>
          <td>2140 /-</td>          
        </tr>
        
        <tr>
          <td>Wardha</td>
          <td>Wardha Central Market</td>
          <td>Wheat</td>
          <td>2210 /-</td>          
        </tr>
        <tr>
          <td>Wardha</td>
          <td>Wardha Krushi Udyog</td>
          <td>Wheat</td>
          <td>2250 /-</td>          
        </tr>
      </table>
    </div>
  )
}
