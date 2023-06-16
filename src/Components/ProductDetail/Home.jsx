import React from 'react'
import {Link } from 'react-router-dom';
import productJson from './Product.json'


function Home() {
    return (
        <div>
            <ul>
                {
                    productJson.map((value, index) => {
                        return <div className='product' key={index}>
                            <h2>{value.title}</h2>
                            <h3>{value.price}</h3>
                            <Link to={`/detail/${value.id}`}>Detail</Link>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Home