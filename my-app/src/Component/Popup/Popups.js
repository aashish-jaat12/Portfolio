import React, { useState } from "react";
import whatapp from "../assets/WhatsApp.png";
import "./popup.css";

function Popups() {
  const [popuptext, setpopuptext] = useState();
  return (
    <div className="fixeds-bottom " style={{ zIndex: "6", left: "initial" }}>
      <div
        className={ popuptext ? "chat-container" : ""}
      >
        <div className="chat-bubble">
          Hi 👋, I am here to help you
          <span className="close-btn" onClick={()=>setpopuptext(!popuptext)}>×</span>
        </div>
      </div>
      <a href="https://wa.me/message/356ZNFGLQ6VRE1 " target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png" alt="help.." />
      </a>
    </div>
  );
}

export default Popups;
