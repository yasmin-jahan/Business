import React from 'react'
import './Footer.css'
import FooterLogo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope, faClock, } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    // ICONS 
    const faLocationDotIcon = <FontAwesomeIcon icon={faLocationDot} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />
    const faEnvelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
    const faClockIcon = <FontAwesomeIcon icon={faClock} />
    const faFacebookFIcon = <FontAwesomeIcon icon={faFacebookF} />
    const faInstagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const faLinkedinInIcon = <FontAwesomeIcon icon={faLinkedinIn} />
    const faXTwitterIcon = <FontAwesomeIcon icon={faXTwitter} />
    const faYoutubeIcon = <FontAwesomeIcon icon={faYoutube} />
    const faGithubIcon = <FontAwesomeIcon icon={faGithub} />

    return (
        <>
            <footer className='footer_section'>
                <div className="container">
                    <div className="footer_wrapper">
                        <div className="footer_area">
                            <div className="footer_content_area">
                                <div className="footer_content footer_col" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="footer_logo">
                                        <a href="/"><img src={FooterLogo} alt="Logo" /></a>
                                    </div>
                                    <div className="footer_text">
                                        <p>We help businesses launch, grow and succeed through
                                            innovative digital solutions and strategic planning.</p>
                                    </div>
                                </div>
                                <div className="footer_content footer_col" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="footer_heading">
                                        <h5>Quick Links</h5>
                                    </div>
                                    <div className="footer_links">
                                        <ul>
                                            <li><a href="#home">Home</a></li>
                                            <li><a href="#about">About Us</a></li>
                                            <li><a href="#services">Services</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                            <li><a href="#contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer_content footer_col" data-aos="zoom-in" data-aos-delay="500">
                                    <div className="footer_heading">
                                        <h5>Services</h5>
                                    </div>
                                    <div className="footer_links">
                                        <ul>
                                            <li><a href="/">Business Strategy</a></li>
                                            <li><a href="/">Cloud Computing</a></li>
                                            <li><a href="/">Reports Analysis</a></li>
                                            <li><a href="/">Branding</a></li>
                                            <li><a href="/">Development</a></li>
                                            <li><a href="/">Consulting</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer_content footer_col" data-aos="zoom-in" data-aos-delay="600">
                                    <div className="footer_heading">
                                        <h5>Contact</h5>
                                    </div>
                                    <div className="footer_links">
                                        <ul>
                                            <li> <a href="">{faLocationDotIcon} <span>New York, USA</span></a></li>
                                            <li> <a href="tel:8006543210">{faPhoneIcon} <span>+1 (800) 654-3210</span></a></li>
                                            <li> <a href="mailto:info@mikon.com">{faEnvelopeIcon} <span>info@mikon.com</span></a></li>
                                            <li> <p>{faClockIcon} <span>Mon - Fri : 9:00 AM - 6:00 PM</span></p></li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                            <div className="footer_copyright">
                                <p>&copy; All Right Reserved 2026 <a href="/">Yasmin Jahan</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer