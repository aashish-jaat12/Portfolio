import React from "react";
import "./projact.css";
import js from "../assets/java-script.png";
import react from "../assets/node-js.png";
import css from "../assets/css-3.png";

function Projact() {
  return (
    <section className="projact" id="projact" >
      <div className="projact-box">
        <h2 >Working Projact</h2>

        <div className="wrapper">
          <div className="projact-item">
            <a target="_blank" href="https://mern-food-app-frontend-r0yy.onrender.com/">
              <img src={react} />
              <h3>Food App</h3>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <p>
                I’m thrilled to announce the completion of my recent project, a
                robust and user-friendly food delivery app built using the MERN
                stack MongoDB, Express.js, React, Node.js. This project aims to
                provide a seamless and enjoyable food ordering experience for
                both customers and restaurants.
              </p>
            </a>
          </div>

          <div className="projact-item">
            <a target="_blank" href="https://aashish-jaat12.github.io/Wynk/">
              <img src={js} />
              <h3>Music App</h3>
              <div className="rating">
                {" "}
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <p>
              I’m thrilled to share an exciting development in one of our latest projects! We've successfully integrated the Wynk Music App into our platform, enhancing our user experience with seamless access to an extensive library of music.
              </p>
            </a>
          </div>
          <div className="projact-item">
            <a target="_blank" href="https://aashish-jaat12.github.io/red-cars/">
            <img src={css} />
            <h3>game app</h3>
            <div className="rating">
              {" "}
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              I'm thrilled to announce that I've just completed a fun and
              challenging project – a JavaScript Car Game! This project allowed
              me to dive deep into the world of game development, enhancing my
              skills in JavaScript, HTML, and CSS, and experimenting with
              various game mechanics.
            </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projact;
