import { useState, useEffect, useRef } from "react"
import { useDispatch } from 'react-redux'
import { setCredentials } from "../redux/userSlice"
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import './forms.css'

function Login() {
    const input = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        input.current.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(!email || !password) throw new Error('Identifiant(s) manquant(s)')
            const response = await axios.post(
                '/api/users/login', JSON.stringify({email: email, password: password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            const { userId, accessToken, roles} = response.data
            dispatch(setCredentials({userId, accessToken, roles}))
            navigate('/')
        } catch (error) {
            if(error?.response.data?.message) {
                setErrorMessage(error?.response.data?.message)
            } else {
                setErrorMessage(error.message)
            }
        }
    }
    return (
        <section id="login">
            <h1>Se Connecter</h1>
            <div className="login-display">
                <p className={errorMessage ? "error-message" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                <form id="login-form" onSubmit={handleSubmit}>

                    <label htmlFor="login-email">Email</label>
                    <input type="email" id="login-email" 
                        ref={input}
                        aria-describedby="email" 
                        onChange={(e) => setEmail(e.currentTarget.value)} 
                    />

                    <label htmlFor="login-password">Password</label>
                    <input type="password" id="login-password" 
                        aria-describedby="password" 
                        onChange={(e) => setPassword(e.currentTarget.value)} 
                    />

                    <button disabled={email?.length === 0 || password?.length === 0 ? true : false}>Se connecter</button>

                </form>
                <p>Besoin d'un compte ? <Link to='/register' className="highlight-link" >Cliqué ici !</Link></p>
            </div>
        </section>
    )
}

export default Login