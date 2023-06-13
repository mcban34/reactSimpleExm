import React from 'react'

function IsLoggin() {
    const IsLoggin = true
    return (
        <div>
            {
                IsLoggin ? (
                    <h2>Giriş Yapıldı!</h2>
                ) : (
                    <h2>Giriş Yapılamadı!</h2>
                )
            }
        </div>
    )
}

export default IsLoggin