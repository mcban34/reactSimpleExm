import React, { useState, useEffect } from 'react'

function Todobasic() {
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState("")
    
    const guncelle = () => {
        setData([...data, inputData])
        localStorage.setItem("todo",JSON.stringify([...data,inputData]))
        setInputData('')
    }

    useEffect(() => {
        console.log("useEffectTetiklemdi!")
        let gelenVeri = JSON.parse(localStorage.getItem("todo"))
        if(gelenVeri){
            setData(gelenVeri)
        }
    },[])

    return (
        <div>
            {
                data.map((value, index) => {
                    return <ul key={index}>
                        <li>{value}</li>
                    </ul>
                })
            }
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <button onClick={guncelle}>guncelle</button>
        </div>
    )
}

export default Todobasic