import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import Logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    //    SIDENAV SHOW
    const [sidenav, setSidenav] = useState(false);

    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    // DESKTOP FIXED MENU 
    const [sticky, setSticky] = useState(false);

    // SCROLL FIXED NAVBAR 
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })





    return (
        <>
            <header id='site_header' className={`${sticky ? "sticky" : ''}`}>
                <div className="container">
                    <div className="header_wrapper">
                        <div className="header_area">
                            <nav className='navbar' id='Navbar'>
                                <div className="navbar_brand">
                                    <a href="/"><img src={Logo} alt="LOGO" /></a>
                                </div>
                                <div className="navbar_toggler" onClick={sidenavShow}>

                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                                <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
                                    <div className="sidebar_header">
                                        <div className="sidebar_brand">
                                            <a href="/"> <img src={Logo} alt="LOGO" /> </a>
                                        </div>

                                        <button className="sidebar_close" onClick={sidenavShow} >
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link activeClass='active' to="home" smooth={true} spy={true} duration={500} onClick={sidenavShow}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to="about" smooth={true} spy={true} duration={500}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="services" smooth={true} spy={true} duration={500}>Services</Link>
                                        </li>
                                        <li>
                                            <Link to="blog" smooth={true} spy={true} duration={500}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="contact" smooth={true} spy={true} duration={500}>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* OVERLAY */}
                <div
                    className={`overlay ${sidenav ? 'active' : ''}`}
                    onClick={sidenavShow}
                ></div>
            </header>
        </>
    )
}

export default Navbar