import React, { useState } from 'react'

function InputUlli() {
    const [fruit, setFruid] = useState(["elma", "armut", "kavun", "kiraz"])
    const [gelenDeger,setGelenDeger] = useState("")
    const elemanEkle =()=>{
       setFruid([...fruit,gelenDeger])
       localStorage.setItem("fruit",JSON.stringify(setFruid))
    }
    return (
        <div>
            <ul>
                {
                    fruit.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
            <input type="text" onChange={(e)=> setGelenDeger(e.target.value)} />
            <button onClick={elemanEkle}>Ekle</button>
        </div>
    )
}

export default InputUlli