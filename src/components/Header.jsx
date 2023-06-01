import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoSignature from '../assets/logo-signature.svg'
import './styles/Header.css'
import { useSelector } from 'react-redux'
import { selectDeviceType } from '../redux/screenDeviceSlice'
import HamburgerMenu from './HamburgerMenu'

function Header() {
    const [isMobile, setIsMobile] = useState()
    const screenDeviceType = useSelector(selectDeviceType)

    useEffect(() => {
        if(screenDeviceType === 'mobile') {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [screenDeviceType])

    return (
        <header id='header'>
            <nav className='header-left'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logoSignature} alt="logo"/>
                    </Link>
                </div>
            </nav>
            {isMobile ? (
                <>
                    <HamburgerMenu />
                </>
            ) : (
                <>
                    <nav className='header-center'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </nav>
                    <nav className='header-right'>
                        <NavLink to='/login'>Se connecter</NavLink>
                    </nav>
                </>
            )}
        </header>
    )
}

export default Header