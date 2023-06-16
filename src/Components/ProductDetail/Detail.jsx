import React from 'react'
import { useParams } from 'react-router-dom'
import productJson from './Product.json'


function Detail() {
  const id = useParams()
  console.log(id.id)
  const productFind = productJson.find(data => data.id==id.id)
  console.log(productFind)
  return (
    <div>Detail</div>
  )
}

export default Detail