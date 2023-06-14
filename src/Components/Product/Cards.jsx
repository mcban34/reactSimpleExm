import React, { useState } from 'react'

function Cards(props) {   
  return (
    <div className='productCard'>
        <h3>{props.title}</h3>
        <h5>{props.desc}</h5>
        <p>{props.price}</p>
        <button>Sepete EKLE</button>
    </div>
  )
}

export default Cards