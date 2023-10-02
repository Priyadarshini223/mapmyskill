import React, { useState } from 'react'
import './signout.css'

const Signout = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    function signin() {
        localStorage.setItem ("umail",email)
        localStorage.setItem ("upass",password)

    }
    return (
        <div id='signin' className='signin'>
            <input value={email} onChange={(res) => setEmail(res.target.value)} type='email' placeholder='Enter Email' />
            <input value={password} onChange={(res) => setPassword(res.target.value)} type='Password' placeholder='Enter password' />
            <button onClick={signin}>Signin</button>

        </div>
    )
}

export default Signout
