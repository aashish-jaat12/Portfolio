import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import { toast } from 'react-toastify'
// toast.configure();
function Contact() {
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
        "http://localhost:3000/api/contact",
        formdata
      );
      if (responce.data.success) {
        setname('')
        setemail('')
        setmessage('')
        setnumber('')
        setsubjet('')
        toast.success(responce.data.message)
      } 
    } catch (error) {
      toast(error.response.data.errors.map((e) => e.msg).join(', '));
      console.log(error.response)
      
    }
  };

  return (
    <section className="contact" id="Contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form onSubmit={submitdata}>
        <div className="input-group">
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              required
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              placeholder="abc@gmail.com"
              required
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Number"
              required
              name="numbar"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              required
              name="subject"
              value={subject}
              onChange={(e) => setsubjet(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            name=""
            cols="25"
            rows="9"
            placeholder="Send Message"
            className="btn"
            required
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <input type="submit" value="send message" className="btn" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
