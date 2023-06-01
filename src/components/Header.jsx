import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoSignature from '../assets/logo-signature.svg'
import './styles/Header.css'

function Header() {
    return (
        <header id='header'>
            <nav className='header-left'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logoSignature} alt="logo"/>
                    </Link>
                </div>
            </nav>
            <nav className='header-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
            </nav>
            <nav className='header-right'>
                <NavLink to='/login'>Se connecter</NavLink>
            </nav>
        </header>
    )
}

export default Header