import { Link, NavLink } from 'react-router-dom'
import logoSignature from '../assets/logo-signature.svg'
import './styles/Header.css'

function Header() {
    return (
        <header id='header'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logoSignature} alt="logo"/>
                </Link>
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
            </nav>
            <nav>
                <NavLink to='/login'>Se connecter</NavLink>
            </nav>
        </header>
    )
}

export default Header