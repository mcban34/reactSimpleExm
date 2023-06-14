import React, { useState,useEffect } from 'react'

function UseEffect1() {
    const [sayi,setSayi] = useState(1)
    
    const arttir = () => {
        setSayi(sayi+1)
    }

    useEffect(() => {
        console.log("sayi değişti!");
        document.title=`Dinlenme Sayısı ${sayi}`
    },[sayi])

   return (
    <div>
        <h2>Kullanılan Sayı : {sayi}</h2>
        <button onClick={arttir}>Arttır</button>
    </div>
  )
}

export default UseEffect1