import { Outlet, NavLink } from "react-router-dom"
import './DashboardLayout.css'

function DashboardLayout() {
    return (
        <div id="dashboard-layout">
            <div className="side-nav-container">
                <nav className="side-nav">
                    <NavLink to='.' end>Tableau de board</NavLink>
                    <NavLink to='products'>Articles</NavLink>
                    <NavLink to='orders'>Commandes</NavLink>
                    <NavLink to='newsletter'>Newsletter</NavLink>
                    <NavLink to='/'>Go to website</NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default DashboardLayout