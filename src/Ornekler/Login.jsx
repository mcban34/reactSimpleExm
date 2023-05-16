import React, { useState } from 'react'

function Login() {
    let [userName, setUserName] = useState("")
    let [password, setPassword] = useState("")
    let [login, setLogin] = useState(false)
    let [errroeMessage,setErrorMessage] = useState(false)

    const userNameInp = (e) => {
        setUserName(e.target.value)
    }

    const passwordInp = (e) => {
        setPassword(e.target.value)
    }

    const girisKontrol = () => {
        if (userName == "mehmet" && password == "1234") {
            setLogin(true)
        }
        else{
            setErrorMessage(true)
        }
    }

    return (
        <div>
            {
                login ? (<h1>Hoşgeldin {userName}</h1>) : (
                    <div className='girisParent'>
                        <input type="text" placeholder='Kullanıcı Adı' onChange={userNameInp} />
                        <input type="text" placeholder='Şifre' onChange={passwordInp} />
                        <button onClick={girisKontrol}>Giriş Yap</button>
                        {errroeMessage && <p>Kullanıcı Adı veya Şifre Hatalı</p>}
                    </div>
                )
            }

        </div>
    )
}

export default Login