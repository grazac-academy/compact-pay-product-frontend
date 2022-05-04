import React, { useState } from "react";
import "./header2.css";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/Landing/Logo.svg";

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
        <div className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
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
            <Link to="/" className="btnOutlined">
              <button>Sign in</button>
            </Link>
            <Link to="/" className="btnFilled">
              <button>Sign up</button>
            </Link>
          </div>
          </div>
       </menu>  

      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
        <RiCloseLine color="#000028" size= {30}/> 
        ): (
        <AiOutlineBars color="#000028" size= {27}/>)}
      </div>
    </nav>
  )
}

export default Navbar;