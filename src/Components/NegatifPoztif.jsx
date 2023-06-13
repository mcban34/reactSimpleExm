import React from 'react'

function NegatifPoztif() {
    const count = 3
  return (
    <div>
        {
            count>0 ? (
                <h2>Sayi Pozitif</h2>
            ):
            count<0 ? (
                <h2>Sayi Negatif</h2>
            ):
            (
                <h3>Sayi Nötr</h3>
            )
        }
    </div>
  )
}

export default NegatifPoztif