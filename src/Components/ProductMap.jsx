import React from 'react'

function Test() {
    const urunler = [
        {
            urunId:1,
            urunAdi:"gofret",
            urunFiyat:10
        },
        {
            urunId:2,
            urunAdi:"elma",
            urunFiyat:10
        },
        {
            urunId:3,
            urunAdi:"armut",
            urunFiyat:10
        },
    ]
  return (
    <div>
        {
            urunler.map(value => {
                return <div key={value.urunId} className='card'>
                    <h2 className='urunAdi'>{value.urunAdi}</h2>
                    <h4 className='urunFiyati'>{value.urunFiyat}</h4>
                </div>
            })
        }
    </div>
  )
}

export default Test