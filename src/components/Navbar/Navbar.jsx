import React from 'react'
import { NavbarStyles, NavbarStylesItem } from './Navbar.styles'
import logo from '../../assets/logos/logo.png'

const Navbar = () => {
    return (
        <NavbarStyles>
            <NavbarStylesItem>
                <img src={logo} alt="nav_logo" />
                <div className='nav-item-item'>
                    
                </div>
            </NavbarStylesItem>
        </NavbarStyles>
    )
}

export default Navbar