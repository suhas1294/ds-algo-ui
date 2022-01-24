import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function NavBar() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink className="nav-link" to="/">
                        Ds-ALGO
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink className="nav-link" to="/problems">
                        Problems
                    </NavLink>
                </li> */}
                <li>
                    <NavLink className="nav-link" to="/love-babbar-450-dsa">
                        Love Babbar
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/relacs">
                        Relacs
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
