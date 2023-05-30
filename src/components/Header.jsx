import { Link, NavLink } from 'react-router-dom'
import logoSignature from '../assets/logo-signature.svg'

function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={logoSignature} alt="logo" height={250} width={250}/>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
                <NavLink to='/login'>Se connecter</NavLink>
            </nav>
        </header>
    )
}

export default Header