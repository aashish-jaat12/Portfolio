import React from "react";
import "./service.css";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/java-script.png";
import react from "../assets/library.png";
import database from "../assets/database.png";
import node from "../assets/programing.png";
import git from "../assets/code-branch.png";
import github from "../assets/github.png";
import aws from "../assets/web.png";
import rnative from "../assets/node-js.png";

function Service() {
  return ( <>
    <div className="service" id="services">
      <h2>Corrently Working With</h2>
      </div>
    
    <div className="contaner">
      <div className="iconContainers">
        <div className="img">
          <img src={html} alt="Python" />
          HTML
        </div>
        <div className="img">
          <img src={css} alt="Java" /> CSS{" "}
        </div>
        <div className="img">
          <img src={js} alt="C" />
          JS
        </div>
        <div className="img">
          <img src={rnative} alt="HTML5" />
          REACT
        </div>
        <div className="img">
          <img src={database} alt="C++" />
          MONGODB
        </div>
        <div className="img">
          <img src={node} alt="Go" />
          NODE JS
        </div>
        <div className="img">
          <img src={git} alt="JavaScript" />
          GIT
        </div>
        <div className="img">
          <img src={github} alt="R" />
          GITHUB
        </div>
        <div className="img">
          <img src={aws} alt="aws" />
          AWS
        </div>
        <div className="img">
          <img src={react} alt="PHP" />
          R-NATIV
        </div>
      </div>
    </div>
    </>
  );
}

export default Service;
