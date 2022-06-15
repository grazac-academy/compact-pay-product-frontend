import classes from './Header.module.css';
import logo from 'assets/Dashboard/Logo.png';
import notification from 'assets/Dashboard/bell.svg';
import profile from 'assets/Dashboard/profile.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.Head}>
        <header>
            <div className={classes.logoContainer}>
            <div className={classes.Logo} >
                <Link to={"/"}>
                <img src={logo} alt="logo" />
                </Link>
            </div>
            </div>

            <div className={classes.navbarContainer}>
            <div className={classes.navbar}>
                <h2>Dashboard</h2>
                <div className={classes.date}>
                <p>Wednesday 12th May, 2022</p>
                <img className={classes.bell} src={notification} alt="notification" />
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
}

export default Header;