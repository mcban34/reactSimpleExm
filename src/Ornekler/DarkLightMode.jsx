import React, { useEffect, useState } from 'react'

function Test() {
    const [DarkLight,setDarkLight] = useState(false)
    const degistir = () => {
        setDarkLight(!DarkLight)
    }
    if(DarkLight==true){
        document.body.style.background="black"
        document.body.style.color="white"
    }
    else{
        document.body.style.background="white"
        document.body.style.color="black"
    }
    return (
        <div>
            <button onClick={degistir}>{DarkLight==false ? "Dark Mode" : "Light Mode"}</button>
            <h2>Selamsss</h2>
        </div>
    )
}

export default Test