import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [createAccount, setCreateAccount] = useState(false)
    const [userCreds, setUserCreds] = useState({ email: '', password: '' })

    const { signUp, login } = useAuth()

    function updateEmail(e) {
        setUserCreds({ ...userCreds, email: e.target.value })
    }

    function updatePassword(e) {
        setUserCreds({ ...userCreds, password: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // prevents signup if form not completed
        if (!userCreds.email || !userCreds.password) { return }

        if (createAccount) {
            // recommended to add password regex check in here
            console.log('Registering')
            signUp(userCreds.email, userCreds.password)
        } else {
            console.log('Logging in')
            login(userCreds.email, userCreds.password)
        }
    }

    return (
        <div>
            <input placeholder='Email' value={userCreds.email} onChange={(e) => {
                updateEmail(e)
            }}></input>
            <input placeholder='Password' type='password' value={userCreds.password} onChange={(e) => {
                updatePassword(e)
            }}></input>
            <button onClick={handleSubmit}>
                <p>Submit</p>
            </button>
            <button onClick={() => setCreateAccount(!createAccount)}>
                <p>{createAccount ? 'Sign In' : 'Sign Up'}</p>
            </button>
        </div>
    )
}
