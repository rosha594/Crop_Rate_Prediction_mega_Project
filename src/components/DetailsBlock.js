import React, { useState } from 'react'
import "../css/homePage.css";

export default function DetailsBlock() {
  const [importPlace,setimport] = useState(['USA, Chaina, Bhutan']);
  const [exportPlace,setexport] = useState(['USA, Chaina, Bhutan']);
  return (
    <div className='detailsBlock'>
      <h3>Imports</h3>
      <div className="importPlace">
        {importPlace.map((data) =>(
          <span>{data},</span>
        ))}
      </div>
      <h3>Exports</h3>
      <div className="exportPlace">
        {exportPlace.map((data) =>(
          <span>{data},</span>
        ))}

      </div>
    </div>
  )
}
