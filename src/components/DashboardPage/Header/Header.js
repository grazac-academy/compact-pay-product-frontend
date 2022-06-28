import classes from "./Header.module.css";
import logo from "assets/Dashboard/Logo.png";
import notification from "assets/Dashboard/bell.svg";
import profile from "assets/Dashboard/profile.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const days = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = weekDays[days.getDay()];
  const month = months[days.getMonth()];
  const date = days.getDate();
  const year = days.getFullYear();

  return (
    <div className={classes.Head}>
      <header>
        <div className={classes.logoContainer}>
          <div className={classes.Logo}>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className={classes.navbarContainer}>
          <div className={classes.navbar}>
            <h2>Dashboard</h2>
            <div className={classes.date}>
              <p>
                {day} {date} {month} {year}
              </p>
              <img
                className={classes.bell}
                src={notification}
                alt="notification"
              />
            </div>
            <div className={classes.profile}>
              <img src={profile} alt="profile" />
              <p>James Joe</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
