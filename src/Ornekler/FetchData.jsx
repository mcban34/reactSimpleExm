import React, {useState,useEffect} from 'react'

function FetchData() {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(results => {
            setData(results)
        })
    },[])
    console.log(data)

  return (
    <div>
        {
            data && data.length > 0 ? (
                <p>{data[0].title}</p>
            ) : (
                <p>Veriler Yükleniyor..</p>
            )
        }
    </div>
  )
}

export default FetchData