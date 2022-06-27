import { sideNavbar } from "../../../constants/index";
import classes from "./Sidebar.module.css";
import signout from "assets/Dashboard/signout_icon.svg";
import menu from "assets/Dashboard/Menu.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showSideBar = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className={classes.ham} onClick={showSideBar}>
        <img src={menu} alt="menu" />
      </div>

      <div className={isOpen ? classes.sidemenu : classes.sidebar}>
        <div className={classes.menu}>
          {isOpen && (
            <FaTimes
              className={`${classes.bar} ${classes.hideBar}`}
              onClick={showSideBar}
            />
          )}

          {sideNavbar.map((item) => (
            <NavLink
              to={item.link}
              className={(navData) =>
                navData.isActive
                  ? `${classes.active} ${classes.Menuitem}`
                  : `${classes.Menuitem}`
              }
            >
              <img src={item.image} alt="" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
        <button className={classes.signout}>
          <img src={signout} alt="" />
          <span>Signout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
