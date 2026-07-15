import {React , useEffect} from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg'

function About() {

    const getItemsPerRow = () => {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
};

    useEffect(() => {
    
        const matchHeightByRow = (selector) => {
            const itemsPerRow = getItemsPerRow();
            const elements = [...document.querySelectorAll(selector)];
    
            elements.forEach(el => el.style.height = 'auto');
    
            for (let i = 0; i < elements.length; i += itemsPerRow) {
                const row = elements.slice(i, i + itemsPerRow);
                const max = Math.max(...row.map(el => el.offsetHeight));
    
                row.forEach(el => {
                    el.style.height = `${max}px`;
                });
            }
        };
    
        const applyHeights = () => {
            matchHeightByRow('.about_box_content h5');
            matchHeightByRow('.about_box_content p');
        };
    
        applyHeights();
    
        window.addEventListener('resize', applyHeights);
    
        return () => window.removeEventListener('resize', applyHeights);
    
    }, []);


    // ICONS 
        const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime}/>
        const faChartPieIcon = <FontAwesomeIcon icon={faChartPie}/>
        const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast}/>
        const faUserClockIcon = <FontAwesomeIcon icon={faUserClock}/>
        const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop}/>
        const faPhoneIcon = <FontAwesomeIcon icon={faPhone}/>
      
  return (
   <>
   <section className='about_section' id='about'>
    <div className="container">
        <div className="about_wrapper">
            <div className="about_area">
                <div className="about_heading title_heading"  data-aos="fade-up">
                    <h3>We Provides Shortage Remarkable Ideas!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vero sapiente dolor atque! Nulla, dolore!</p>
                </div>
                <div className="about_box_wrapper">
                    <div className="about_box" data-aos="zoom-in" data-aos-delay="400">
                        <div className="about_icon">{faBusinessIcon}</div>
                        <div className="about_box_content">
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio voluptas facere alias eos quidem!</p>
                        </div>
                    </div>
                    <div className="about_box" data-aos="zoom-in" data-aos-delay="500">
                        <div className="about_icon green_icon">{faChartPieIcon}</div>
                        <div className="about_box_content">
                            <h5>Integration</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio voluptas facere alias eos quidem! Lorem ipsum dolor  consectetur adipisicing. </p>
                        </div>
                    </div>
                    <div className="about_box" data-aos="zoom-in" data-aos-delay="600">
                        <div className="about_icon blue_icon">{faTruckFastIcon}</div>
                        <div className="about_box_content">
                            <h5>Branding</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio voluptas facere alias eos quidem! sit amet consectetur sit amet consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about_box_details ">
            <div className="about_col">
                <div className="about_img">
                    <img src={AboutImage} alt="About" />
                </div>
                <div className="about_img_info_box" >
                    <h6 className='img_info_title'>GET A PRICE QUOTE TODAY!</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, <span> adipisicing elit. Sed, quod? </span></p>
                    <a href="/">{faPhoneIcon} <span>1-800-654-3210</span> </a>
                </div>
            </div>
            <div className="about_col more_space">
                <div className="about_info_content">
                    <h3>We have business skills that will increase your earnings.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repellat id libero praesentium adipisci ipsa modi repudiandae fugit impedit assumenda.</p>
                </div>
                <div className="about_grid_info">
                    <div className="icon">{faUserClockIcon}</div>
                    <div className="detail">
                        <h4>Start your own business in minutes.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, minus.</p>
                    </div>
                </div>
                 <div className="about_grid_info">
                    <div className="icon green_icon">{faHouseLaptopIcon}</div>
                    <div className="detail">
                        <h4>Open a business account online.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum.</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
   </section>
   </>
  )
}

export default About