import React, { useState } from "react";
import "./navbar.css";
import { Link ,useLocation} from "react-router-dom";

function Navbar() {
  const [menuicon, setmenuicon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  console.log(location.pathname)

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
          className="bx bx-menu hamburger"
          onClick={() => setmenuicon(!menuicon)}
          id={"menu-icon"}
        ></i>
      </div>
      <nav className="navbar" style={menuicon ? { display: "none" } : null}>
        <Link
          to="/"
          className={location.pathname === "/"  ? "action" : null}
         
        >
          Home
        </Link>

        <a
          className={location.pathname === "/webdevelipment" ||location.pathname === '/appdevelipment' || location.pathname === '/softweardevelipment' ? "action" : null}
        
        >
          <div className="listbtn">
            <button onClick={toggleDropdown}>
              Services <span>▼</span>
            </button>

            {isOpen && (
              <ul className="dropdown">
                <Link to="/webdevelipment">
                  <li onClick={toggleDropdown} >Website Development</li>
                </Link>
                <Link to="/appdevelipment">
                  <li onClick={toggleDropdown}>App Development</li>{" "}
                </Link>
                <Link to="/softweardevelipment">
                  {" "}
                  <li onClick={toggleDropdown}>Softwear Development</li>{" "}
                </Link>
              </ul>
            )}
          </div>
        </a>
        <Link
          to="/exprence"
          className={location.pathname === "/exprence" ? "action" : null}
         
        >
          Achievements
        </Link>
        <Link
          to="/AboutAs"
          className={location.pathname === "/AboutAs" ? "action" : null}
       
        >
          Contact
        </Link>
      </nav>{" "}
    </header>
  );
}

export default Navbar;
