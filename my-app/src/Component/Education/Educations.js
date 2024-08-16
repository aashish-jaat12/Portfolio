import React from "react";
import "./education.css";

function Educations() {
  return (
    <div className="education" id="education" >
      <h3 className="heading"> My Knowledge and Education</h3>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2018-2021</div>
          <div className="timeline-content">
            <p>
              <h3>High School- 91%</h3>
              <hr />
              ACA School <hr />
              Jaipur, Rajastha
              <hr />
              <h3>Secondary - 80%</h3>
              <hr />
              2018 Jaipur, Rajastha
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
          <div className="timeline-date">2021-2024</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>
              Bachelor of Computer Application <hr />
              IPS bussiness school technology affected by rajasthan university
              <hr /> 2021 – 2024 Jaipur, Rajasthan
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
          <div className="timeline-date">Skills</div>
          <div className="timeline-content">
            <h3> Programming Languages</h3>
            <p> C++ , C , Java</p>
            <h3> Frameworks & Libraries</h3>
            <p>HTML, CSS , ReactJS, NodeJS, ExpressJS , MongoDB , Bootstrap , React-native</p>
            <h3>Version Control</h3>
            <p>Git ,Github</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"> </div>
          <div className="timeline-date">2021-2024</div>
          <div className="timeline-content">
            <h3>COURSEWORK SUBJECTS</h3>
            <p>
            • Operating System <hr/>
• Computer Networks<hr/>
• Object Oriented Programming<hr/>
• Database Management System<hr/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educations;
