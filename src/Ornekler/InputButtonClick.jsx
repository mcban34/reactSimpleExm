import React, { useState } from 'react'

function Test() {
    const [veri,setVeri] = useState("")
    const [pElement,setpElement] = useState("")

    const veriAl = (e) => {
        setVeri(e.target.value)
    }

    const veriYazdir = (e) => {
       setpElement(veri)
    }

    return (
        <div>
            <input type="text" onChange={veriAl}/>
            <button onClick={veriYazdir}>veri gtir</button>
            <p>girilen Veri {pElement}</p>
        </div>
    )
}

export default Test