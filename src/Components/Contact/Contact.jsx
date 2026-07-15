import React from 'react'
import './Contact.css'
import Button from '../../Components/Button/Button'
import ContactImage from '../../assets/contact/contact.jpg'

function Contact() {
    return (
        <section className='contact_section' id='contact'>
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_area">
                        <div className="contact_img_area contact_col" >
                            <div className="contact_img">
                                <img src={ContactImage} alt="Contact" />
                            </div>
                        </div>
                        <div className="contact_content_aera contact_col"  >
                            <div className="contact_content">
                                <h3>Contact Us</h3>
                            </div>
                            <form>
                                <div className="input_wrapper">
                                    <input type="text" className='form-control' placeholder='Your Name...' autoComplete='off' />
                                </div>
                                <div className="input_wrapper">
                                    <input type="text" className='form-control' placeholder='Your Number...' autoComplete='off' />
                                </div>
                                <div className="input_wrapper">
                                    <input type="email" className='form-control' placeholder='Your Email...' autoComplete='off' />
                                </div>
                                <div className="input_wrapper">
                                    <textarea placeholder='Write a Message...'></textarea>
                                </div>
                                {/* <div className="btn_wrapper contact_btn">
                            <button type='submit' className='btn'>Submit</button>
                        </div> */}
                                <div className="btn_wrapper contact_btn">
                                    <Button onClick={() => alert("Clicked!")} className='btn' type='submit'>
                                        Click Me
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact