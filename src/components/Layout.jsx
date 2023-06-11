import { Outlet } from 'react-router-dom'
import Header from './Header'
import './Layout.css'
import Footer from './Footer'

function Layout() {
    return (
        <div className='container'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout