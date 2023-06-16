import React, { useState ,useEffect} from 'react'
import "../css/homePage.css";
import Chart from "react-apexcharts";



export default function StatusChart({chartdata}) {
  const [chart, setchart]=useState({options: {
    colors: [ '#048D6F','rgb(80,45,90)'],
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1,2,3,4,5]
    }
  },
  series: [
    {
      name: "series-1",
      data: [45,50,63],
      
    }
  ],
})
  
  

  
  useEffect(() => {
  // setchart(chartdata)
  console.log(chartdata)
}, [chartdata]);

  return (
    <div className='statusChart'>
      

  <Chart
    options={chart.options}
    series={chart.series}
    type="line"
    width="400px"
    
    />
    
    </div>
  )
}
