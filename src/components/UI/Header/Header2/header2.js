import React, { useState } from "react";
import "./header2.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "assets/Landing/Logo.svg";
import Button from "components/UI/Button/button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <menu className="menu-links">
        <div
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <Link to="/" className="navItems">
            Home
          </Link>
          <Link to="/about_us" className="navItems">
            About Us
          </Link>
          <Link to="/our_services" className="navItems">
            Our Services
          </Link>

          <div className="navbarbtnLinks">
            <Link to="/signin" className="btnOutlined">
              <Button>Sign in</Button>
            </Link>
            <Link to="/register" className="btnFilled">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </menu>

      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#000028" size={30} />
        ) : (
          <RiMenu2Fill color="#000028" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
