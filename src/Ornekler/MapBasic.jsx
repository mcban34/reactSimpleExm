import React, {useState} from 'react'

function MapBasic() {
    const meyveler = ["elma","armut","muz","kiraz"]
  return (
    <div>
        <ul>
            {
                meyveler.map((value,index) =>{
                    return <li key={index}>{value}</li>
                })
            }
        </ul>
    </div>
  )
}

export default MapBasic