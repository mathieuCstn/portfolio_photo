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
                <form id="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="register-email">Email</label>
                    <input type="email" id="register-email" ref={userRef} autoComplete="off" onChange={e => setEmail(e.currentTarget.value)} required onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}/>
                    <label htmlFor="register-password"><span className={validPassword ? "valid" : "hide"}>✅ </span><span className={validPassword || !password ? "hide" : "invalid"}>👎 </span>Mot de passe</label>
                    <input type="password" id="register-password" onChange={e => setPassword(e.currentTarget.value)} value={password} required aria-invalid={validPassword ? "false" : "true"} aria-describedby="passwordnote" onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)}/>
                    <p className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                        Votre mot de passe doit :<br/>
                        Contenir entre 8 et 24 charactères.<br/>
                        Être composé de lettres majuscules, minuscules, de chiffres et d'au moins un caractère spéciale.<br/>
                        Les caractère spéciaux autorisés : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    <label htmlFor="register-match-password"><span className={validMatch ? "valid" : "hide"}>✅ </span><span className={validMatch || !matchPassword ? "hide" : "invalid"}>👎 </span>Confirmer votre mot de passe</label>
                    <input type="password" id="register-match-password" onChange={e => setMatchPassword(e.currentTarget.value)} value={matchPassword} required aria-invalid={validMatch ? "false" : "true"} aria-describedby="confirmnote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)} />
                    <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        Doit correspondre au mot de passe rentré plus haut.
                    </p>
                    <button>S'enregistrer</button>
                </form>
            </div>
            <p>Déjà d'un compte ? <Link to='/login'>Cliqué ici !</Link></p>
        </section>
    )
}

export default Register