import React, {useState} from 'react'

function Sayac() {
    const [sayi,setSayi] = useState(0)

    const arttir = () =>{
        setSayi(sayi + 1)
    }

    const azalt = () => {
        if(sayi>0){
            setSayi(sayi - 1)
        }
    }


  return (
    <div>
        <button onClick={azalt}>---</button>
        <span>{sayi}</span>
        <button onClick={arttir}>+++</button>
    </div>
  )
}

export default Sayac