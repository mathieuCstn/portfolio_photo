import { Link, NavLink } from 'react-router-dom'
// import logoSignature from '../assets/logo-signature.svg'
import logoSignature from '../assets/basquiat-plagiat.svg'

function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={logoSignature} alt="logo" height={250} width={250}/>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </header>
    )
}

export default Header