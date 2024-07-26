import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className="social">
                <a href=""><i className="bx bxl-linkedin"></i>
                </a>
                <a href=""><i className="bx bxl-github"></i></a>
                <a href=""><i className="bx bxl-instagram-alt"></i></a>
                <a href=""><i className="bx bxl-twitter"></i></a>
            </div>
            <ul className="list">
                <li><a href="">FAQ</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">AboutcMe</a></li>
                <li><a href="">Contsct</a></li>
                <li><a href="">Projacts</a></li>
            </ul>
            <p className="copyright">
                @ Ashish Choudhary | All Rights Reserved
            </p>
        
    </footer>
  )
}

export default Footer