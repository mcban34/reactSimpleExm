import React, {useState} from 'react'

function InputdanAnlikVeri() {
  const [text,setText] = useState("")

  const veriDinle = (e) =>{
    setText(e.target.value)
  }

  return (
    <div>
        <input type="text" onChange={veriDinle}/>
        <p>Anlık Veri : {text}</p>
    </div>
  )
}

export default InputdanAnlikVeri