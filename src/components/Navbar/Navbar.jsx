import React, { useState } from 'react'
import { NavbarStyles, NavbarStylesItem } from './Navbar.styles'
import logo from '../../assets/logos/logo.png'
import CustomSelect from '../CustomSelect/Customselect'
import { langs, menudata, options } from '../../data/data'

const Navbar = () => {
    let [menuopen, setMenuOpen] = useState(false)
    const handleSelect = (selectedOption) => {
        console.log("Selected:", selectedOption);
    }; console.log(menuopen);
    const handleOpen = () => {
        setMenuOpen(!menuopen)
    }
    return (
        <NavbarStyles>
            <NavbarStylesItem>
                <img src={logo} alt="nav_logo" />
                <div className='nav-item-item'>
                    <p className='project-selection'>Projects.</p>
                    <CustomSelect options={options} placeholder="Rahmat business" onSelect={handleSelect} />
                    <button className='nav-item-button'>Become a partner</button>
                    <CustomSelect options={langs} placeholder="En" onSelect={handleSelect} />
                    <div className='nav-item-menu'>
                        <button onClick={handleOpen}><i className="fa-regular fa-bars"></i></button>
                        {menuopen ? (
                            <div className='menu-main'>
                                {menudata.map((item) => (
                                    <>
                                        <div className='menu-main-header'><h2>{item.name}</h2> </div>
                                        <div className='menu-item'>
                                            {item.items.map((item) => (
                                                <div key={item.id}>{item.number}<h1>{item.name}</h1></div>
                                            ))}
                                        </div>
                                        <h1>Rahmat business</h1>
                                        <div>
                                            <p>How it works</p>
                                            <p>Advantages</p>
                                            <p>FAQ</p>
                                        </div>
                                        <div>
                                            <button className='nav-item-button'>Become a partner</button>
                                            <div className="socials">
                                                <div className="social"><i class="fa-brands fa-facebook"></i></div>
                                                <div className="social"><i class="fa-brands fa-x-twitter"></i></div>
                                                <div className="social"><i class="fa-brands fa-instagram"></i></div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        ) : (<></>)}
                    </div>
                </div>
            </NavbarStylesItem>
        </NavbarStyles>
    )
}

export default Navbar