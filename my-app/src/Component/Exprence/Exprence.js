import React from "react";

import "./exprence.css";
import inter1 from '../assets/inter1.png'
import inter2 from '../assets/inter2.png'
import github from '../assets/github.png'
import freelance from '../assets/freelance.png'
import react from "../assets/node-js.png";
function Exprence() {
  return (
    <>
    <div className="exprences">
      <div className="exprences-box">
        <h2>My  Achievements</h2>
    <div>
        <div className="exprences-item">
         
            <img src={inter2} />
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
            <img src={freelance} />
        </div>
        
        <div className="exprences-item">
         
            <img src={inter1} />
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
         I worked in this company for 1 month as a web development role par. I had 4 tasks in this company which I completed in 1 month. Here I completed and submitted 4 tasks. In this company I worked on full stack web development where I worked on both backend and frontend. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit pariatur temporibus, ab voluptatem repellendus molestias quia atque animi quas ea totam soluta laborum delectus blanditiis culpa natus eveniet? Nam, animi?
         </p>
         <h3>Working on Project</h3>

         <p>
         I worked in this company for 1 month as a web development role par. I had 4 tasks in this company which I completed in 1 month. Here I completed and submitted 4 tasks. In this company I worked on full stack web development where I worked on both backend and frontend. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit pariatur temporibus, ab voluptatem repellendus molestias quia atque animi quas ea totam soluta laborum delectus blanditiis culpa natus eveniet? Nam, animi?
         </p>
         </div>
            <a href="https://github.com/aashish-jaat12"> <img src={github} /></a>
         </div>
     </div>
    </div>
    </>
  );
}

export default Exprence;
