import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="social">
     <p>Get connected with us on social networks:</p>
     <div className="social-i">
       <a href="https://www.linkedin.com/in/ashish-choudhary-24a917230"><i className="bx bxl-linkedin"></i></a>
       <a href="https://github.com/aashish-jaat12"><i className="bx bxl-github"></i></a>
       <a href="https://www.instagram.com/jaat_ashish001?igsh=MTBxNWR4eHUyOGZ3cQ=="><i className="bx bxl-instagram-alt"></i></a>
       <a href="https://wa.me/message/356ZNFGLQ6VRE1"><i className="bx bxl-whatsapp"></i></a>
       <a href="https://wa.me/message/356ZNFGLQ6VRE1"><i className="bx bxl-telegram"></i></a>
     
     </div>
   </div>
 <div className="footer-container">
   <div className="footer-section ">
     <h3>Ashish Choudhary</h3>
     <p>I am Ashish Choudhary. I am a web developer based in Jaipur. I have been doing web development since 2021 and have worked with various library and framework. I help you to code your complex Web designs and provide a full-stack solution from website creation to delivery.</p>
   </div>
   <div className="footer-section ">
     <h3>SERVICES</h3>
     <ul>
       <li><a href="#">Web-Development </a></li>
       <li><a href="#">App-Development </a></li>
       <li><a href="#">Software Development</a></li>
       <li><a href="#">About Us</a></li>
     </ul>
   </div>
   <div className="footer-section ">
     <h3>CONTACT</h3>
     <ul>
       <li><i className="bx bxs-map"></i> Jaipur, Rj 302012, India</li>
       <li><i className="bx bxl-gmail"></i> ashishjat126@gmail.com</li>
       <li><i className="bx bxs-phone"></i> + 91 7232816781</li>
       <li><i className="bx bxs-phone"></i> + 91 6367321255</li>
     </ul>
   </div>
 </div>
 <div className="footer-bottom">
   <p>© 2024 Copy right By: <a href="#">Aashish Choudhary</a></p>
 </div>
</footer>

  )
}

export default Footer