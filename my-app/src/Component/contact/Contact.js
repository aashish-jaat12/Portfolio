import React from "react";
import './contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form>
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="abc@gmail.com" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Number" />
            <input type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="input-group-2">
            <textarea name="" cols='25'
            rows='9' placeholder="Send Message" className="btn" />
            <input type="submit" value='send message' className="btn" />
</div>
      </form>
    </section>
  );
}

export default Contact;
