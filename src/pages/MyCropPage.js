import { React, useState } from "react";
import "../css/myCropPage.css";
import "../css/predictionPage.css";
import { cropData } from "../Assets/cropImages/Data";

export default function MyCropPage(props) {
  const [pageNo, setPageNo] = useState(1);
  const [crop, setcrop] = useState("");
  const [landArea, setLanarea] = useState();

  const { userName, district } = props;
  // setDis(distict)

  const changePage = (value) => {
    console.log(userName);
    setPageNo(value);
  };

  const getlandArea = (value) => {
    setLanarea(value);
    console.log(landArea);
  };
  const takecrop = (event) => {
    setcrop(event.currentTarget.id);
  };
  return (
    <div className="myCropPage">
      <h2>My Crop</h2>

      {(() => {
        switch (pageNo) {
          case 1:
            return (
              <FirstPage
                changePage={changePage}
                crop={crop}
                takecrop={takecrop}
                userName={userName}
                district={district}
              />
            );
          case 2:
            return (
              <SecondPage
                changePage={changePage}
                getlandArea={getlandArea}
                crop={crop}
                userName={userName}
                district={district}
              />
            );
          case 3:
            return (
              <ThirdPage
                landArea={landArea}
                userName={userName}
                district={district}
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}

function FirstPage(props) {
  const { changePage, crop, takecrop } = props;

  return (
    <div className="firstPage">
      <img src={require("../Assets/mycropImg.png")} alt="" className="mcrFG" />
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
      <div className="selectedCrop">{"Selected Crop : - " + crop}</div>
      <button onClick={() => changePage(2)}>Next Step</button>
    </div>
  );
}

function SecondPage(props) {
  const { changePage, getlandArea, crop, userName, district } = props;
  const [area, setAreavalue] = useState(0);

  const [geolocation, setGeolocation] = useState(false);

  const [profit, setProfit] = useState(0);
  const [demand, setdemand] = useState(false);
  const [show, setshow] = useState(false);

  const [totalBudget, setBudget] = useState(0);
  const [totalprofit, setTProfit] = useState();
  const [production, setProduction] = useState(0);
  const [seedCost, setSeedcost] = useState();
  const [landCost, setLandCost] = useState();
  const [sowingCost, setSowingCost] = useState();
  const [feilizerCost, setFertilizerCost] = useState();
  const [weedingCost, setWeedinCost] = useState();
  const [harvestCost, setHarvestCost] = useState();
  const [otherBudget, setOtherBudget] = useState();

  const priceData = {
    Nagpur: {
      Arhar: 6600,
      Urad: 6600,
      Wheat: 2000,
      Paddy: 2040,
      Bajara: 2350,
      Barley: 1635,
      Copra: 10590,
      Gram_Channa: 5230,
      Groundnut: 5850,
      Jowar: 2970,
    },
    Amaravati: {
      Arhar: 6600,
      Urad: 6600,
      Wheat: 2000,
      Paddy: 2040,
      Bajara: 2350,
      Barley: 1635,
      Copra: 10590,
      Gram_Channa: 5230,
      Groundnut: 5850,
      Jowar: 2970,
    },
    Gadchiroli: {
      Arhar: 6600,
      Urad: 6600,
      Wheat: 2000,
      Paddy: 2040,
      Bajara: 2350,
      Barley: 1635,
      Copra: 10590,
      Gram_Channa: 5230,
      Groundnut: 5850,
      Jowar: 2970,
    },
    Wardha: {
      Arhar: 6600,
      Urad: 6600,
      Wheat: 2000,
      Paddy: 2040,
      Bajara: 2350,
      Barley: 1635,
      Copra: 10590,
      Gram_Channa: 5230,
      Groundnut: 5850,
      Jowar: 2970,
    },
    Nanded: {
      Arhar: 6600,
      Urad: 6600,
      Wheat: 2000,
      Paddy: 2040,
      Bajara: 2350,
      Barley: 1635,
      Copra: 10590,
      Gram_Channa: 5230,
      Groundnut: 5850,
      Jowar: 2970,
    },
  };
  const budgetData = {
    Arhar: {
      production: 10,
      seed: 405,
      seedReq: 3,
      Land: 500,
      sowing: 1000,
      fertilizer: 1600,
      weeding: 620,
      harvest: 1500,
      other: 600,
      cultivationcost: 6225,
      profit: 66000,
    },
    Urad: {
      production: 8,
      seed: 640,
      seedReq: 8,
      Land: 500,
      sowing: 800,
      fertilizer: 1000,
      weeding: 1200,
      harvest: 700,
      other: 2000,
      cultivationcost: 6840,
      profit: 52800,
    },
    Wheat: {
      production: 15,
      seed: 1600,
      seedReq: 40,
      Land: 1200,
      sowing: 600,
      fertilizer: 2200,
      weeding: 800,
      harvest: 1200,
      other: 2000,
      cultivationcost: 9600,
      profit: 300000,
    },
    Paddy: {
      production: 25,
      seed: 2100,
      seedReq: 8,
      Land: 2500,
      sowing: 800,
      fertilizer: 6500,
      weeding: 3000,
      harvest: 1500,
      other: 3000,
      cultivationcost: 19400,
      profit: 51000,
    },
    Bajara: {
      production: 14,
      seed: 305,
      seedReq: 2,
      Land: 1000,
      sowing: 700,
      fertilizer: 1600,
      weeding: 1200,
      harvest: 1500,
      other: 3000,
      cultivationcost: 9305,
      profit: 32900,
    },
    Barley: {
      production: 18,
      seed: 200,
      seedReq: 5,
      Land: 2000,
      sowing: 1500,
      fertilizer: 4000,
      weeding: 2500,
      harvest: 2500,
      other: 3000,
      cultivationcost: 15700,
      profit: 29430,
    },
    Copra: {
      production: 10,
      seed: 1200,
      seedReq: 15,
      Land: 340,
      sowing: 340,
      fertilizer: 7280,
      weeding: 3500,
      harvest: 7000,
      other: 4000,
      cultivationcost: 23660,
      profit: 105900,
    },
    Gram_Channa: {
      production: 10,
      seed: 405,
      seedReq: 3,
      Land: 1400,
      sowing: 1000,
      fertilizer: 1600,
      weeding: 620,
      harvest: 600,
      other: 2000,
      cultivationcost: 7625,
      profit: 52300,
    },
    Groundnut: {
      production: 10,
      seed: 1000,
      seedReq: 30,
      Land: 2400,
      sowing: 600,
      fertilizer: 4200,
      weeding: 1500,
      harvest: 1200,
      other: 3000,
      cultivationcost: 13900,
      profit: 585000,
    },
    Jowar: {
      production: 12,
      seed: 400,
      seedReq: 3,
      Land: 1300,
      sowing: 500,
      fertilizer: 1100,
      weeding: 600,
      harvest: 500,
      other: 2500,
      cultivationcost: 6900,
      profit: 35640,
    },
  };

  const cropInfo = cropData.find((entry) => entry.cropName === crop);
  function outout() {
    if (!crop === "Copra") {
      return (
        <p>Copra : Profit :105900 Rs. and Cult. Cost : 236600 (per Acer)</p>
      );
    }
    if (!crop === "Arhar") {
      return <p>Copra : Profit :66000 Rs. and Cult. Cost : 6840 (per Acer)</p>;
    }

    if (!crop === "Urad") {
      return <p>Copra : Profit :52800 Rs. and Cult. Cost : 6840 (per Acer)</p>;
    }
    if (!crop === "Paddy") {
      return <p>Copra : Profit :51000 Rs. and Cult. Cost : 19400 (per Acer)</p>;
    }
    if (!crop === "Wheat") {
      return <p>Copra : Profit :30000 Rs. and Cult. Cost : 9600 (per Acer)</p>;
    }
  }
  const calculateBudget = () => {
    const dataC = budgetData[crop];

    outout();
    const seed = dataC.seed;
    setSeedcost(seed);
    const land = dataC.Land;
    setLandCost(land);
    const sowing = dataC.sowing;
    setSowingCost(sowing);
    const fertilizer = dataC.fertilizer;
    setFertilizerCost(fertilizer);
    const weeding = dataC.weeding;
    setWeedinCost(weeding);
    const harvest = dataC.harvest;
    setHarvestCost(harvest);
    const other = dataC.other;
    setOtherBudget(other);

    const sum = seed + land + sowing + fertilizer + weeding + harvest + other;
    const total = sum * area;
    setBudget(total);
    setProduction(dataC.production * area);
    const price = priceData[district];
    const p = price[crop];
    setTProfit(production * p);
    console.log(production * p);

    // console.log(sum)
    setshow(true);
  };

  return (
    <div className="secondPage">
      <h5>
        <span style={{ color: "rgb(4, 141, 111)" }}>Welcome </span>
        {userName}
      </h5>
      <div className="listitem">
        <div className="crpImg">
          <img src={cropInfo.path} alt="" />
        </div>
        <div className="crName">{crop}</div>
      </div>

      <div className="inputBlock">
        Land Area in Acre :
        <input
          type="number"
          name="Land-Area"
          id="landArea"
          onChange={(e) => setAreavalue(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          getlandArea(area);
          calculateBudget();
        }}
      >
        Calculate Budget
      </button>

      <div
        style={{
          display: show ? "block" : "none",
        }}
      >
        <div
          style={{
            width: "60%",
            margin: "30px",
            marginTop: "0px",
            overflowY: "scroll",
            height: "250px",
            lineHeight: "0.4",
          }}
          className="result-box"
        >
          <h6>
            Total Crop production &nbsp;&nbsp;&nbsp;&nbsp;: {production} Qtn.
          </h6>
          <h6>Total Cultivation Budget &nbsp;: {totalBudget} Rs.</h6>
          <h6>Total Profit &nbsp;: {totalprofit} Rs.</h6>
          <h6>Detailed Budget:</h6>
          <div style={{ display: "block", fontSize: "16px" }}>
            <p>Seed Cost &nbsp;: {seedCost}</p>
            <p>Land Preperation Cost &nbsp;: {landCost}</p>
            <p>Sowing Cost &nbsp;: {sowingCost}</p>
            <p>Fetilizer Cost &nbsp;: {feilizerCost}</p>
            <p>Weeding Cost &nbsp;: {weedingCost}</p>
            <p>Harvesting Cost &nbsp;: {harvestCost}</p>
            <p>Other activity Cost &nbsp;: {otherBudget}</p>
            <br />
            <br />
            <br />
          </div>

          {geolocation ? (
            <h6 style={{ color: "red" }}>
              Not recommended as your loaction is not suitable for this crop..
              <button onClick={() => changePage(1)} className="redbtn">
                Choose Crop
              </button>
            </h6>
          ) : (
            <>
              {demand ? (
                <h5>
                  Total Predicted Profit : {profit}{" "}
                  <button onClick={() => changePage(3)} className="greenbtn">
                    Create Virtual Farm
                  </button>
                </h5>
              ) : (
                <h5>
                  Demand is low select another crop..{" "}
                  <button onClick={() => changePage(3)} className="yellowbtn">
                    Create Virtual Farm
                  </button>
                </h5>
              )}
            </>
          )}
        </div>
        {/* <div
          style={{
            width: "60%",
            margin: "30px",
            marginTop: "30px",
            height: "250px",
          }}
        >
          <h5>Another Profitable Crop in Your Region...</h5>
          <div>
            {!crop === "Copra" ? (
              <p>
                "Copra : Profit :105900 Rs. and Cult. Cost : 236600 (per Acer)"
              </p>
            ) : (
              ""
            )}
            {!crop === "Arhar" ? (
              <p>
                'Copra : Profit :66000 Rs. and Cult. Cost : 6840 (per Acer)'
              </p>
            ) : (
              ""
            )}
            {!crop === "Urad" ? (
              <p>
                'Copra : Profit :52800 Rs. and Cult. Cost : 6840 (per Acer)'
              </p>
            ) : (
              ""
            )}
            {!crop === "Paddy" ? (
              <p>
                'Copra : Profit :51000 Rs. and Cult. Cost : 19400 (per Acer)'
              </p>
            ) : (
              ""
            )}
            {!crop === "Wheat" ? (
              <p>
                'Copra : Profit :30000 Rs. and Cult. Cost : 9600 (per Acer)'
              </p>
            ) : (
              ""
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}

function ThirdPage(props) {
  const { landArea, userName } = props;
  return (
    <div className="thirdPage" style={{ fontSize: "30px" }}>
      <h5>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "rgb(4, 141, 111)" }}>Welcome </span>
        {userName}
      </h5>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Land Area : {landArea} Acre
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "white",
            padding: "10px",
            borderRadius: "25px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            margin: "20px",
          }}
        >
          <h6>Month 1</h6>
          <ul style={{ fontSize: "12px" }}>
            <li>
              {" "}
              Land Prepeartion <input type="radio"></input>
            </li>
            <li>
              {" "}
              Sowing
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio"></input>
            </li>
            <li>
              {" "}
              Irrigation
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio"></input>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "white",
            padding: "10px",
            borderRadius: "25px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            margin: "20px",
          }}
        >
          <h6>Month 2</h6>
          <ul style={{ fontSize: "12px" }}>
            <li>
              {" "}
              Fertilization&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"></input>
            </li>
            <li>
              {" "}
              Weed Control
             &nbsp;&nbsp;
              <input type="radio"></input>
            </li>
            <li>
              {" "}
              Post Control
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio"></input>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "white",
            padding: "10px",
            borderRadius: "25px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            margin: "20px",
          }}
        >
          <h6>Month 3</h6>
          <ul style={{ fontSize: "12px" }}>
            <li>
              {" "}
              Harvesting &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"></input>
            </li>
            <li>
              {" "}
              Packaging and Storing<input type="radio"></input>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
