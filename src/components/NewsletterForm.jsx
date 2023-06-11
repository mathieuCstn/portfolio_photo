import { useState, useEffect } from 'react';
import './NewsletterForm.css'
import axios from '../api/axios';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/

function Newsletter() {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const isEmailValid = EMAIL_REGEX.test(email)
        setValidEmail(isEmailValid)
    }, [email])
    
    const handleSubmitNewsletter = async (e) => {
        e.preventDefault()

        const isEmailValid = EMAIL_REGEX.test(email)

        try {
            if(!isEmailValid) throw new Error('Email non valide')
            await axios.post(
                '/api/newsletter/add', JSON.stringify({email}),
                {
                    headers: {'Content-Type': 'application/json'}
                }
            )
            setSuccess(true)
        } catch (error) {
            console.log(error)
            if(error?.response.data?.message) {
                alert(error?.response.data?.message)
            } else {
                alert(error.message)
            }
        }
    }

    return (
        <div className="newsletter-container">
            {
                success ? <h3 className='success-message'>🎉Votre email à bien été incrit dans la newsletter ! 🎉</h3> : (
                    <>
                        <h3>Newsletter</h3>
                        <form onSubmit={handleSubmitNewsletter}>
                            <div className='email-input-container'>
                                <span className={validEmail ? "valid" : "hide"}>✅<br />Votre email est au bon format !</span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>👎<br />Rentré un email valide.</span>
                                <input type="email" 
                                    placeholder="votre email" 
                                    onChange={e => setEmail(e.currentTarget.value)} 
                                />
                            </div>

                            <button>S'inscrire</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default Newsletter