import React, { useState } from 'react'
import './home.css'

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [img, setimg] = useState(false);
  
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
  return (
    <section className='home' id='home'>
        <div className="home-content">
            <h1>hii, Its <span>Ashish</span></h1>
            <h3 className='text-animation'>I'm a <span></span></h3>
            <p>I am Ashish Choudhary. I am a web developer based in Jaipur. I have been doing web development since 2021 and have worked with various  library and framework. I help you to code your complex Web designs and provide a full-stack solution from website creation to delivery. </p>
            <div className="social-icons">
                <a target="_blank" href="https://www.linkedin.com/in/ashish-choudhary-24a917230"><i className="bx bxl-linkedin"></i>
                </a>
                <a target="_blank" href="https://github.com/aashish-jaat12"><i className="bx bxl-github"></i></a>
                <a target="_blank" href="https://www.instagram.com/jaat_ashish001?igsh=MTBxNWR4eHUyOGZ3cQ=="><i className="bx bxl-instagram-alt"></i></a>
                <a target="_blank" href="https://wa.me/message/356ZNFGLQ6VRE1"><i className="bx bxl-whatsapp"></i></a>
            </div>
            <div className="btn-group">
                <a href="#Contact" className='btn' >Hire</a>
                <a href="#Contact" className='btn' >Contact</a>
                <a href="https://drive.google.com/file/d/18GTTReCkUBaVdotEWlrkpZwL0n0Yokv6/view?usp=sharing" className='btn' >View CV</a>
            </div>
        </div>
            <div className="home-img">
            <div>
   {/* Modal popup */} <img src="home11.jpg" onClick={openPopup} alt="" />
      {isOpen && (
        <div className="modal" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closePopup}>&times;</span>
            <img src={'home11.jpg'} alt="Large view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
               
            </div>
    </section>
  )
}

export default Home