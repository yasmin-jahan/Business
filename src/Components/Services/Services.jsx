import {React, useEffect} from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';


function Services() {


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
        matchHeightByRow('.service_content h5');
        matchHeightByRow('.service_content p');
    };

    applyHeights();

    window.addEventListener('resize', applyHeights);

    return () => window.removeEventListener('resize', applyHeights);

}, []);

     // ICONS 
        const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode}/>
        const faChartBarIcon = <FontAwesomeIcon icon={faChartBar}/>
        const faCopyIcon = <FontAwesomeIcon icon={faCopy}/>
        const faMarkerIcon = <FontAwesomeIcon icon={faMarker}/>
        const faUserGearIcon = <FontAwesomeIcon icon={faUserGear}/>
        const faCoinsIcon = <FontAwesomeIcon icon={faCoins}/>


  return (
    <>
    <section className='service_section' id='services'>
        <div className="container">
            <div className="service_wrapper">
                <div className="service_area">
                    <div className="service_heading title_heading" data-aos="fade-up">
                        <h3>What's Services We Are Offering to Our Customers.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia ipsa nihil.</p>
                    </div>
                    <div className="service_box_wrapper">
                        <div className="service_box" data-aos="zoom-in" data-aos-delay="300">
                            <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                            <h4 className='number'>01</h4>
                            <div className="service_content">
                                <h5>Cloud</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="/" className='read'>Read More</a>
                            </div>
                        </div>

                         <div className="service_box" data-aos="zoom-in" data-aos-delay="400">
                            <div className="service_icon">{faChartBarIcon}</div>
                            <h4 className='number'>02</h4>
                            <div className="service_content">
                                <h5>Business strategy</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quod.</p>
                                <a href="/" className='read'>Read More</a>
                            </div>
                        </div>

                         <div className="service_box" data-aos="zoom-in" data-aos-delay="500">
                            <div className="service_icon green_icon">{faCopyIcon}</div>
                            <h4 className='number'>03</h4>
                            <div className="service_content">
                                <h5>Reports analysis</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quod.</p>
                                <a href="/" className='read'>Read More</a>
                            </div>
                        </div>

                         <div className="service_box" data-aos="zoom-in" data-aos-delay="600">
                            <div className="service_icon">{faMarkerIcon}</div>
                            <h4 className='number'>04</h4>
                            <div className="service_content">
                                <h5>Decision Maker </h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quod.</p>
                                <a href="/" className='read'>Read More</a>
                            </div>
                        </div>

                         <div className="service_box" data-aos="zoom-in" data-aos-delay="700">
                            <div className="service_icon green_icon">{faUserGearIcon}</div>
                            <h4 className='number'>05</h4>
                            <div className="service_content">
                                <h5>Customer Oriented </h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="/" className='read'>Read More</a>
                            </div>
                        </div>

                         <div className="service_box" data-aos="zoom-in" data-aos-delay="800">
                            <div className="service_icon blue_icon">{faCoinsIcon}</div>
                            <h4 className='number'>06</h4>
                            <div className="service_content">
                                <h5>Solution Focused </h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quod.</p>
                                <a href="/" className='read'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services