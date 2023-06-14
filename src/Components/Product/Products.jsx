import React, { useState } from 'react'
import Cards from './Cards'

function Products() {
  const [product,setProduct] = useState([
    {
      title:"elma",
      desc:"elma çok güzel meyvedir",
      price:10
    },
    {
      title:"armut",
      desc:"armut çok güzel meyvedir",
      price:7
    },
    {
      title:"kavun",
      desc:"kavun çok güzel meyvedir",
      price:5
    }
  ])


  return (
    <section className='products'>
      {
        product.map((value,index) => {
          return <div className='productParent' key={index}>
            <Cards 
              title={value.title}
              desc={value.desc}
              price={value.price}
            />
          </div>
        })
      }
    </section>
  )
}

export default Products