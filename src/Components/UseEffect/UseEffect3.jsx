import React, { useEffect, useState } from 'react'

function UseEffect3() {
    const [data, setData] = useState(60)
    useEffect(() => {
        const interval = setInterval(() => {
            setData((test) => test - 1)
        }, 100);
        if(data===0){
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [data])
    return (
        <div>
            {
                data>0 ? (
                    <h2>Kalan Süreniz : {data} Saniye</h2>
                )
                :
                (
                    <h1>İşleminize Devam edebilirsiniz...</h1>
                )
            }
           
        </div>
    )
}

export default UseEffect3