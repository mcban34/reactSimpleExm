import React, {useState} from 'react'

function Fontsi() {
    const [fontSize,setFontSize] = useState(25)

    const arttir = () =>{
        setFontSize(fontSize + 1)
    }

    const azalt = () =>{
        setFontSize(fontSize - 1)
    }

  return (
    <div>
        <p style={{fontSize:`${fontSize}px`}}>Neos Yazilim</p>
        <button onClick={arttir}>++</button>
        <button onClick={azalt}>--</button>
    </div>
  )
}

export default Fontsi