import React from 'react'
import './home.css'

function Home() {
  return (
    <section className='home' id='home'>
        <div className="home-content">
            <h1>hii, Its <span>Ashish</span></h1>
            <h3 className='text-animation'>I'm a <span></span></h3>
            <p>I am Ashish Choudhary. I am a web developer based in Jaipur. I have been doing web development since 2021 and have worked with various  library and framework. I help you to code your complex UI/UX designs and provide a full-stack solution from website creation to delivery. </p>
            <div className="social-icons">
                <a href=""><i className="bx bxl-linkedin"></i>
                </a>
                <a href=""><i className="bx bxl-github"></i></a>
                <a href=""><i className="bx bxl-instagram-alt"></i></a>
                <a href=""><i className="bx bxl-twitter"></i></a>
            </div>
            <div className="btn-group">
                <a href=""className='btn' >Hire</a>
                <a href=""className='btn' >Contact</a>
            </div>
        </div>
            <div className="home-img">
                <img src="home11.jpg" alt="" />
            </div>
    </section>
  )
}

export default Home