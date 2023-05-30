import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setCredentials } from "../redux/userSlice"
import { Link } from 'react-router-dom'
import axios from '../api/axios'

function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await axios.post(
            '/api/users/login', JSON.stringify({email, password}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
            .then(response => response.data)
            .catch(console.error)

        dispatch(setCredentials(data))
    }
    return (
        <section id="login">
            <h1>Se Connecter</h1>
            <div className="login-display">
                <form id="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="login-email">Email</label>
                    <input type="email" id="login-email" onChange={(e) => setEmail(e.currentTarget.value)} />
                    <label htmlFor="login-password">Password</label>
                    <input type="password" id="login-password" onChange={(e) => setPassword(e.currentTarget.value)} />
                    <button>Se connecter</button>
                </form>
                <p>Besoin d'un compte ? <Link to='/register'>Cliqué ici !</Link></p>
            </div>
        </section>
    )
}

export default Login