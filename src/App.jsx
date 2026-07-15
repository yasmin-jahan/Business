import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  

  return (
   <div className='App'>

    {/* COMPONENTS */}

    {/* NAVBAR  */}
    <Navbar />

    {/* HERO SECTION  */}
    <Home />

    {/* ABOUT SECTION  */}
    <About />

    {/* SERVICE SECTION  */}
    <Services />

    {/* BLOG SECTION  */}
    <Blog />

    {/* CONTACT SECTION  */}
    <Contact />

    {/* FOOTER SECTION  */}
    <Footer />


   </div>
  )

}

export default App
