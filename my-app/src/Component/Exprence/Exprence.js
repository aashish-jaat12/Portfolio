import React, { useState } from "react";

import "./exprence.css";
import inter1 from '../assets/inter1.png'
import inter2 from '../assets/inter2.png'
import github from '../assets/github.png'
import freelance from '../assets/freelance.png'
import react from "../assets/node-js.png";
function Exprence() {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setimg] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  return (
    <>
    <div className="exprences">
  
      <div className="exprences-box">
        <h2>My  Achievements</h2>
        
    <div>
        <div className="exprences-item">
        <div>
   {/* Modal popup */}
      {isOpen && (
        <div className="modal" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closePopup}>&times;</span>
            <img src={img} alt="Large view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
           <div onClick={openPopup}> <img src={inter2} onClick={()=>setimg(inter2) } /></div>
            <div className="exprences-wrapper">
            <h3>
            Orinson Technologies Private Limited</h3>

            <p>
            I am currently doing a remote internship at Orinson Technologies Private Limited. I am working as a frontend developer in this company. Right now I am working on React JS and also using various libraries and frameworks. In this internship I got such tasks which I have completed and submitted. For this reason I have created different layouts for landing pages for e-commerce websites etc
            </p>
            </div>
        </div>

        <div className="exprences-item">
            <div className="exprences-wrapper">
            <h3>Freelancing</h3>

            <p>
            I have also worked as a freelancer. I met some knowledgeable people in freelancing projects where I worked on something or they gave me some stipend. While freelancing, I worked on both frontend and backend. Here I used or worked on React JS Node JS Express JS Mongodb and many other frameworks. I have worked on more than 30 projects in freelancing.
            </p>
            </div>
            <div onClick={openPopup}> <img src={freelance} onClick={()=>setimg(freelance) } /></div>
        </div>
        
        <div className="exprences-item">
            <div onClick={openPopup}>
            <img src={inter1} onClick={()=>setimg(inter1) } /></div>
            <div className="exprences-wrapper">
            <h3>CipherByte Technologies</h3>

            <p>
            I worked in this company for 1 month as a web development role par. I had 4 tasks in this company which I completed in 1 month. Here I completed and submitted 4 tasks. In this company I worked on full stack web development where I worked on both backend and frontend.
            </p>
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className="gitcomponents"> 
      <div className="gitexprence">
      <h2>My git Profile and Project Achievements</h2>
    <div className="gitexprences-item">
         <div className="gitexprences-wrapper">
         <h3> My bechalar degary</h3>

         <p>
        
I completed my Bachelor of Computer Applications (BCA) degree from IPS College in Jaipur, from 2021 to 2024. During my three years at IPS, I gained comprehensive knowledge in computer science, programming languages, database management, and software development. The curriculum was well-structured, blending theoretical concepts with practical applications, which equipped me with the skills needed to excel in the IT industry. I also engaged in various projects and internships, which enhanced my problem-solving abilities and understanding of real-world challenges. My time at IPS College was instrumental in shaping my technical expertise and preparing me for a successful career in technology.
         </p>
         <h3>Working on Project</h3>

         <p>
         Creating over 20 projects with the MERN stack (MongoDB, Express, React, Node.js) can significantly enhance your web development skills. Each project can explore different libraries and technologies, like Redux for state management, Axios for API calls, Mongoose for MongoDB interactions, and JWT for authentication. Projects could range from simple CRUD applications to more complex systems like e-commerce platforms, social media clones, and real-time chat apps using Socket.io. Integrating third-party services like Stripe for payments, AWS S3 for file storage, and Passport.js for OAuth can further broaden your expertise and prepare you for real-world development challenges.
         </p>
         </div>
            <a href="https://github.com/aashish-jaat12"> <img src={github} /><p>Click This Image and view <br/> git profile</p></a>
         </div>
     </div>
    </div>
    </>
  );
}

export default Exprence;
