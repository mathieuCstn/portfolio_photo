import { Outlet, NavLink } from "react-router-dom"

function DashboardLayout() {
    return (
        <>
            <nav>
                <NavLink to='products'>Articles</NavLink>
                <NavLink to='orders'>Commandes</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default DashboardLayout