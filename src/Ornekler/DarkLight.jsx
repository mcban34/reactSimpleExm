import React, { useState } from 'react'

function DarkLight() {

    const [darkMode,setDartMode] = useState(false)

    const kontrol = () => {
        setDartMode(!darkMode)
    }

  return (
    <div>
        <button onClick={kontrol}>
            {
                darkMode==true ? ("dark mode") : ("light mode")
            }
        </button>
    </div>
  )
}

export default DarkLight