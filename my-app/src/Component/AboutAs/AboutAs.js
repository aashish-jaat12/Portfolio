import React, { useState } from "react";
import "./aboutas.css";
import yourimg from '../assets/yourimg.jpg'
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaLinkedin,
  FaInstagram,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function AboutAs() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [subject, setsubjet] = useState("");
  const [message, setmessage] = useState("");

  const formdata = {
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message,
  };
  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "https://portfolio-backend-9fhf.onrender.com/api/contact",
        formdata
      );
      if (responce.data.success) {
        setname("");
        setemail("");
        setmessage("");
        setnumber("");
        setsubjet("");
        toast.success(responce.data.message);
      }
    } catch (error) {
      toast(error.response.data.errors.map((e) => e.msg).join(", "));
      console.log(error.response);
    }
  };
  return (
    <div className="contact-container">
      <div className="profile-card">
        <img
          src={yourimg}
          alt="Ashsih Choudhary"
          className="profile-image"
        />
        <h2>Ashish </h2>
        <p>Programmierer, Designer, Web Developer and App Developer.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ashish-choudhary-24a917230">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jaat_ashish001?igsh=MTBxNWR4eHUyOGZ3cQ==">
            <FaInstagram />
          </a>
          <a href="https://portfolio-app-hz9n.onrender.comf">
            <FaDribbble />
          </a>
          <a href="https://wa.me/message/356ZNFGLQ6VRE1">
            <FaWhatsapp />
          </a>
        </div>
        <div className="contact-info">
          <p>
            <MdEmail /> ashishjat126@gmail.com
          </p>
          <p>
            <MdPhone /> +91 7232816781
          </p>
          <p>
            <MdLocationOn /> Jaipur, Rj 302012, India
          </p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Me </h2>

        <form onSubmit={submitdata}>
          <div>
            <label>Name</label>
            <input
              type="text"
            
              required
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label>E-Mail</label>
            <input
              type="text"
           
              required
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <label>Number</label>
            <input
              type="number"
            
              required
              name="numbar"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
            
              required
              name="subject"
              value={subject}
              onChange={(e) => setsubjet(e.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              required
              placeholder="Write message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" value="send message" className="btns" />
        </form>
      </div>
    </div>
  );
}

export default AboutAs;
