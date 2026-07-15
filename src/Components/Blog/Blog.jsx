import React from 'react'
import './Blog.css'
import Button from '../../Components/Button/Button'
import BlogImage from '../../assets/blog/blog.jpg'

function Blog() {
  return (
    <>
    <section className='blog_section' id='blog'>
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_area">
                    <div className="blog_content_area blog_col">
                       <div className="blog_content">
                         <h3>WE HELP BUSINESS LAUNCH, GROW AND SUCCEED</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates quasi rem vero, vel quaerat deleniti atque non, temporibus voluptatibus, commodi ab? Quibusdam at laudantium quas reiciendis, doloribus quam obcaecati.</p>
                       </div>
                       <div className="blog_btn btn_wrapper">
                        <Button href="/" className='btn'>Get Started</Button>
                       </div>
                    </div>
                    <div className="blog_image_area blog_col">
                        <div className="blog_img">
                            <img src={BlogImage} alt="Blog" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog