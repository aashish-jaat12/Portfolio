import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navlink, setnavlink] = useState("");
  const [menuicon, setmenuicon] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
          className={navlink === "home"  ? "action" : null}
          onClick={() => setnavlink("home")}
        >
          Home
        </Link>

        <a
          className={navlink === "Services" ? "action" : null}
          onClick={() => setnavlink("Services")}
        >
          <div className="listbtn">
            <button onClick={toggleDropdown}>
              Services <span>▼</span>
            </button>

            {isOpen && (
              <ul className="dropdown">
                <Link to="/webdevelipment">
                  <li>Website Development</li>
                </Link>
                <Link to="/appdevelipment">
                  <li>App Development</li>{" "}
                </Link>
                <Link to="/softweardevelipment">
                  {" "}
                  <li>Softwear Development</li>{" "}
                </Link>
              </ul>
            )}
          </div>
        </a>
        <Link
          to="/exprence"
          className={navlink === "Projact" ? "action" : null}
          onClick={() => setnavlink("Projact")}
        >
          Achievements
        </Link>
        <Link
          to="/AboutAs"
          className={navlink === "Contact" ? "action" : null}
          onClick={() => setnavlink("Contact")}
        >
          Contact
        </Link>
      </nav>{" "}
    </header>
  );
}

export default Navbar;
