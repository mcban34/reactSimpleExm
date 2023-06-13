import React, { useEffect, useState } from 'react'



function Ustate1() {
    const [data,setData] = useState("")
    const dataVeriAl = (e) => {
        setData(e.target.value)
        console.log(data)
    }

    useEffect(() => {
        console.log("VERİ DEĞİŞTİ!!!")
    },[])

  return (
    <div>
        <input type="text"  onChange={dataVeriAl}/>
    </div>
  )
}

export default Ustate1