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
                <li>
                    <NavLink className="nav-link" to="/problems">
                        Problems
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
