import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className="social">
        <a target="_blank" href="https://www.linkedin.com/in/ashish-choudhary-24a917230"><i className="bx bxl-linkedin"></i>
                </a>
                <a target="_blank" href="https://github.com/aashish-jaat12"><i className="bx bxl-github"></i></a>
                <a target="_blank" href="https://www.instagram.com/jaat_ashish001?igsh=MTBxNWR4eHUyOGZ3cQ=="><i className="bx bxl-instagram-alt"></i></a>
                <a href="https://wa.me/message/356ZNFGLQ6VRE1"><i className="bx bxl-whatsapp" target="_blank"></i></a>
            </div>
            <ul className="list">
                <li><a href="#Contact">FAQ</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#home">AboutcMe</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#projact">Projacts</a></li>
            </ul>
            <p className="copyright">
                @ Ashish Choudhary | All Rights Reserved
            </p>
        
    </footer>
  )
}

export default Footer