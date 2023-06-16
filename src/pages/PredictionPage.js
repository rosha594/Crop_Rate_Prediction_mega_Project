import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "../css/predictionPage.css";

import CropPriceResult from "../components/CropPriceResult";
import {cropData} from "../Assets/cropImages/Data";
import predData, { preData } from "../Assets/cropImages/PredictionData"


export default function PredictionPage() {
  
    const [crop, setcrop] = useState("");
    const [district, setdis] = useState("");
    const [date, setdate] = useState("");
  
    const markets = [
    {district:"Nagpur",market:["Kalmana Market","Cotton Market"]},
    {district:"Wardha",market:["Wardha Market, APMC Wrdha"]},
    {district:"Amaravati",market:["AAT Kruishi", "Amaravati Central"]},
    {district:"Akola",market:["Akola Kruishi Udyog","Central Farmer Market"]}  ,
    {district:"Bhandara",market:["Bhandara District Central","Krushi Market Bhandara"]}
    ];
    const [prices,setPrices] = useState([])
  
    const [resultBlock,setblock] = useState(1);
    const [akola,setakola] = useState(false);
    const [Amaravati,setAmaravati] = useState(false);
    const [Bhandara,setBhandara] = useState(false);
    const [Nagpur,setNagpur] = useState(false);
    const [Wardha,setWardha] = useState(false);
  

    const dist = [
      "District",
      "Amaravati",
      "Akola",    
      "Bhandara",
      "Nagpur",
      "Wardha",
    ];
    
  
  
  
  const changeDist =(event) => {
    setdis(event.target.value)
  }
 
  const changeDate = (event) =>{
    setdate(event.target.value)
  }

  const takecrop = (event) => {
    setcrop(event.currentTarget.id);
  };
  
  const predict =() => {
    if(district==="Akola"){
      setakola(true)
      setAmaravati(false)
      setBhandara(false)
      setNagpur(false)
      setWardha(false)
    }
    else if(district === "Amaravati")
    {
      setAmaravati(true)
      setakola(false)
      
      setBhandara(false)
      setNagpur(false)
      setWardha(false)
    }
    else if(district==="Nagpur")
    {
      setNagpur(true)
      setakola(false)
      setAmaravati(false)
      setBhandara(false)
      
      setWardha(false)
    }
    else if(district==="Wardha")
    {setakola(false)
      setAmaravati(false)
      setBhandara(false)
      setNagpur(false)
      
      setWardha(true)
    }
    else if(district==="Bhandara")
    {
      setakola(false)
      setAmaravati(false)
      
      setNagpur(false)
      setWardha(false)
      setBhandara(true)
    }
  
    setblock(0)
  }

  
  return (
    <>
    {resultBlock?
    <div className="prediactionPage">
      <h2>Price Prediction</h2>
      <div className="input">
        {/*****  Crop List ******/}
        <div className="cropList">
          {cropData.map((x) => (
            <div className="listitem" id={x.cropName} onClick={takecrop}>
              <div className="crpImg">
                <img src={x.path} alt="" />
              </div>
              <div className="crName">{x.cropName}</div>
            </div>
          ))}
        </div>

        {/* <div className="cropList">
          <div className="listitem" id="Arhar" onClick={takecrop}>
            <div className="crpImg">
              <img src={arhar} alt="" />
            </div>
            <div className="crName">Arhar</div>
          </div>
          <div className="listitem" id="Bajara" onClick={takecrop}>
            <div className="crpImg">
              <img src={bajara} alt="" />
            </div>
            <div className="crName">Bajara</div>
          </div>
          <div className="listitem" id="Barley" onClick={takecrop}>
            <div className="crpImg">
              <img src={barley} alt="" />
            </div>
            <div className="crName">Barley</div>
          </div>
          <div className="listitem" id="Jowar" onClick={takecrop}>
            <div className="crpImg">
              <img src={jowar} alt="" />
            </div>
            <div className="crName">Jowar</div>
          </div>
          <div className="listitem" id="Maize" onClick={takecrop}>
            <div className="crpImg">
              <img src={maize} alt="" />
            </div>
            <div className="crName">Maize</div>
          </div>
          <div className="listitem" id="Paddy" onClick={takecrop}>
            <div className="crpImg">
              <img src={paddy} alt="" />
            </div>
            <div className="crName">Paddy</div>
          </div>
          <div className="listitem" id="Wheat" onClick={takecrop}>
            <div className="crpImg">
              <img src={wheat} alt="" />
            </div>
            <div className="crName">Wheat</div>
          </div>
          <div className="listitem" id="Urad" onClick={takecrop}>
            <div className="crpImg">
              <img src={urad} alt="" />
            </div>
            <div className="crName">Urad</div>
          </div>
          <div className="listitem" id="Sunflowerseed" onClick={takecrop}>
            <div className="crpImg">
              <img src={sunflowerseed} alt="" />
            </div>
            <div className="crName">Sunflower Seed</div>
          </div>
          <div className="listitem" id="Sugarcane" onClick={takecrop}>
            <div className="crpImg">
              <img src={sugarcane} alt="" />
            </div>
            <div className="crName">Sugarcane</div>
          </div>
          <div className="listitem" id="Soyabean" onClick={takecrop}>
            <div className="crpImg">
              <img src={soyabean} alt="" />
            </div>
            <div className="crName">Soyabean</div>
          </div>
          <div className="listitem" id="Sesamum" onClick={takecrop}>
            <div className="crpImg">
              <img src={sesamum} alt="" />
            </div>
            <div className="crName">Sesamum</div>
          </div>
          <div className="listitem" id="Toria" onClick={takecrop}>
            <div className="crpImg">
              <img src={toria} alt="" />
            </div>
            <div className="crName">Toria</div>
          </div>
          <div className="listitem" id="Raw Jute" onClick={takecrop}>
            <div className="crpImg">
              <img src={rawjute} alt="" />
            </div>
            <div className="crName">Raw Jute</div>
          </div>
          <div className="listitem" id="Raw Cotton" onClick={takecrop}>
            <div className="crpImg">
              <img src={rawcotton} alt="" />
            </div>
            <div className="crName">Raw Cotton</div>
          </div>
          <div className="listitem" id="Ragi" onClick={takecrop}>
            <div className="crpImg">
              <img src={ragi} alt="" />
            </div>
            <div className="crName">Ragi</div>
          </div>
          <div className="listitem" id="Niger Seed" onClick={takecrop}>
            <div className="crpImg">
              <img src={nigerseed} alt="" />
            </div>
            <div className="crName">Niger Seed</div>
          </div>
          <div className="listitem" id="Mustard" onClick={takecrop}>
            <div className="crpImg">
              <img src={mustard} alt="" />
            </div>
            <div className="crName">Mustard</div>
          </div>
          <div className="listitem" id="Moong" onClick={takecrop}>
            <div className="crpImg">
              <img src={moong} alt="" />
            </div>
            <div className="crName">Moong</div>
          </div>
          <div className="listitem" id="Lentil" onClick={takecrop}>
            <div className="crpImg">
              <img src={lentil} alt="" />
            </div>
            <div className="crName">Lentil</div>
          </div>
          <div className="listitem" id="Groundnut" onClick={takecrop}>
            <div className="crpImg">
              <img src={groundnut} alt="" />
            </div>
            <div className="crName">Groundnut</div>
          </div>
          <div className="listitem" id="Gram" onClick={takecrop}>
            <div className="crpImg">
              <img src={gram} alt="" />
            </div>
            <div className="crName">Gram</div>
          </div>
          <div className="listitem" id="Copra" onClick={takecrop}>
            <div className="crpImg">
              <img src={copra} alt="" />
            </div>
            <div className="crName">Copra</div>
          </div>
          <div className="listitem" id="Safflowerseed" onClick={takecrop}>
            <div className="crpImg">
              <img src={safflowerseed} alt="" />
            </div>
            <div className="crName">Safflower Seed</div>
          </div>
        </div> */}

        {/* ******* Other Inputs ******** */}
        <div className="blockPre">
          <img src={require('../Assets/prediction.png')} alt=""/>

        <div className="selectedCrop">Selecetd Crop : <br/>{crop}</div>
        <form method="post" className="formInputs">
          <select name="distict" id="distict" value={district} onChange={changeDist}>
            {dist.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
          <input type="date" name="date" id="date" value={date} onChange={changeDate} />

{/* <h6>{date}</h6> */}
          {/* <Link to={{pathname:'/result',state:{crop,district,date}}}> */}
            <button type="submit" onClick={predict}>Predict</button>
          {/* </Link> */}
        </form>
        </div>

        {/* <CropPriceResult /> */}
      </div>
    </div>
      :<div className='cropPriceResult'>
        <h3>{crop}</h3>
      <button style={{width:"150px",height:"50px",border: "2px solid rgb(4, 141, 111)",borderRadius: "25px",  backgroundColor: "rgb(4, 141, 111)",marginTop:"50px",color: "white",fontWeight: "400"}} onClick={() => setblock(1)}>Go Back</button>
      <table>
        <tr>
          <th>District</th>
          <th>Market</th>
          <th>Date</th>
          <th>Price</th>
          
        </tr>
        {akola? <> <tr>
          <td>Akola</td>
          <td>Akola Krushi Bazaar</td>
          <td>{date}</td>
          <td>2500 /-</td>          
        </tr>
        <tr>
          <td>Akola</td>
          <td>Akola Farmer market</td>
          <td>{date}</td>
          <td>2450 /-</td>          
        </tr>
        </>:<></>}
        {Amaravati? <> <tr>
          <td>Amaravati</td>
          <td>Amaravati Krushi Bazaar</td>
          <td>{date}</td>
          <td>2200 /-</td>          
        </tr>
        <tr>
          <td>Amaravati</td>
          <td>Amaravati Central market</td>
          <td>{date}</td>
          <td>2350 /-</td>          
        </tr>
        </>:<></>}
        {Nagpur? <> <tr>
          <td>Nagpur</td>
          <td>Kalamana Market</td>
          <td>{date}</td>
          <td>2400 /-</td>          
        </tr>
        <tr>
          <td>Nagpur</td>
          <td>Cotton Market</td>
          <td>{date}</td>
          <td>2450 /-</td>          
        </tr>
        </>:<></>}
        {Wardha? <> <tr>
          <td>Wardha</td>
          <td>Wardha Krushi Udyog</td>
          <td>{date}</td>
          <td>2300 /-</td>          
        </tr>
        <tr>
          <td>Wardha</td>
          <td>Kisan Madni Wardha</td>
          <td>{date}</td>
          <td>2350 /-</td>          
        </tr>
        </>:<></>}
        {Bhandara? <> <tr>
          <td>Bhandara</td>
          <td>Bhandara Krushi Bazaar</td>
          <td>{date}</td>
          <td>2500 /-</td>          
        </tr>
        <tr>
          <td>Bhandara</td>
          <td>Bhandara Central market</td>
          <td>{date}</td>
          <td>2550 /-</td>          
        </tr>
        </>:<></>}
        
        
        
        
      </table>
    </div>
      }
      </>
  );
}
