import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./header1.css";
import Logo from "../../../../assets/Landing/Logo.svg";

import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Header1 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="container">
      <div className="navbar"}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div
          className={`${classes.nav_menu} 
                 {
                   click
                     ? "nav_links_mobile"
                     : "nav_links_mobile_hide"
                 }`}
        >
          <div className={classes.navbarLinks}>
            <Link to="/" className={classes.navItems}>
              <li>Home</li>
            </Link>
            <Link to="/about_us" className={classes.navItems}>
              <li>About Us</li>
            </Link>
            <Link to="/our_services" className={classes.navItems}>
              <li>Our Services</li>
            </Link>
          </div>

          <div className={classes.navbarbtnLinks}>
            <Link to="/" className={classes.btnOutlined}>
              <button>Sign in</button>
            </Link>
            <Link to="/" className={classes.btnFilled}>
              <button>Sign up</button>
            </Link>
          </div>
        </div>

        <div className={classes.bars} onClick={handleClick}>
          <i className={click ? "fa fa-bars" : "fas fa-times"}></i>
                    
          {/* {click ? (
            <RiCloseLine color="#fff" size={30} />
          ) : (
            <AiOutlineBars color="#fff" size={27} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header1;
