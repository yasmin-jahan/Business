import React from 'react'
import './Home.css'
import Button from '../../Components/Button/Button'
import BannerImage from '../../assets/banner/banner-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

function Home() {

    // ICONS 
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

    return (
        <>
            <section id='home' className='hero_section'>

                <div className="hero_wrapper">

                    <div className="hero_bg_img"></div>
                    <div className="container">
                        <div className="hero_area">
                            <div className="hero_content_area col ">
                                <div className="hero_text">
                                    <h1 className='title'>WE PROMOTE YOUR <span>BUSINESS</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minima ea esse optio maiores. Est nemo commodi quis modi officia!</p>
                                </div>
                                {/* <div className="hero_btn btn_wrapper">
                                    <a href="/" className='btn'>Get Started <span></span> </a>
                                </div> */}
                                <div className="hero_btn btn_wrapper">
                                    <Button href="/" className='btn'>Get Started</Button>
                                </div>
                            </div>
                            <div className="hero_img_area col">
                                <div className="hero_img">
                                    <img src={BannerImage} alt="Banner Image" />
                                </div>
                                <div className="hero_style_1">{faChartIcon}
                                    <h4>Business Analysis</h4>
                                </div>
                                <div className="hero_style_1 hero_style_2">{faShieldIcon}
                                    <h4>99.9% Sucess</h4>
                                </div>
                                <div className="hero_style_1 hero_style_3">{faChartAreaIcon}
                                    <h4>Strategy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home