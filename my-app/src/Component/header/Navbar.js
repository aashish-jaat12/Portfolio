import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navlink, setnavlink] = useState("");
  const [menuicon, setmenuicon] = useState();
  return (
    <header className="header">
      <Link to="/" className="logo">
        Ashish<span>Choudhary</span>
      </Link>
      <div className="icon">
        <i
          className="bx bx-menu"
          onClick={() => setmenuicon(!menuicon)}
          id={"menu-icon"}
        ></i>
      </div>
      <nav className="navbar" style={menuicon ? { display: "none" } : null}>
        <Link
          to="/"
          className={navlink === "home" ? "action" : null}
          onClick={() => setnavlink("home")}
        >
          Home
        </Link>
        <a
          href="#education"
          className={navlink === "Education" ? "action" : null}
          onClick={() => setnavlink("Education")}
        >
          Education
        </a>
        <a
          href="#services"
          className={navlink === "Services" ? "action" : null}
          onClick={() => setnavlink("Services")}
        >
          Services
        </a>
        <a
          href="#projact"
          className={navlink === "Projact" ? "action" : null}
          onClick={() => setnavlink("Projact")}
        >
          Projact
        </a>
        <a
          href="#Contact"
          className={navlink === "Contact" ? "action" : null}
          onClick={() => setnavlink("Contact")}
        >
          Contact
        </a>
      </nav>{" "}
    </header>
  );
}

export default Navbar;
