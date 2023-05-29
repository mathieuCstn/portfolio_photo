import { useState, useRef, useEffect } from "react"
import axios from "../api/axios"
import { Link } from "react-router-dom"

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function Register() {
    const userRef = useRef()
    const errorRef = useRef()

    const [email, setEmail] = useState('')
    const [emailFocus, setEmailFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [matchPassword, setMatchPassword] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password)
        console.log(result)
        console.log(password)
        setValidPassword(result)
        const match = password === matchPassword
        setValidMatch(match)
    }, [password, matchPassword])

    useEffect(() => {
        setErrorMessage('')
    }, [email, password, matchPassword])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section id="register">
            <h1>S'enregistrer</h1>
            <div className="register-display">
                <p ref={errorRef} className={errorMessage ? "error-message" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="register-email">Email</label>
                    <input type="email" onChange={e => setEmail(e.currentTarget.value)} />
                    <label htmlFor="register-password">Mot de passe</label>
                    <input type="password" id="register-password" onChange={e => setPassword(e.currentTarget.value)} value={password} />
                    <label htmlFor="register-match-password">Confirmer ot de passe</label>
                    <input type="password" id="register-match-password" onChange={e => setPassword(e.currentTarget.value)} value={password} />
                    <button>S'enregistrer</button>
                </form>
            </div>
            <p>Déjà d'un compte ? <Link to='/login'>Cliqué ici !</Link></p>
        </section>
    )
}

export default Register