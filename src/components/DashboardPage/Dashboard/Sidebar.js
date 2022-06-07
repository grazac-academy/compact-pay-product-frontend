import {sideNavbar} from '../../../constants/index';
import classes from './Sidebar.module.css'
import signout from 'assets/Dashboard/signout_icon.svg';
import { NavLink } from "react-router-dom";


const Sidebar = () => {


    return (
        <div className={classes.sidebar}>
            <div className={classes.menu}>
            {sideNavbar.map((item) => (
               
                    <NavLink to={item.link} className={(navData) => navData.isActive ? `${classes.active} ${classes.Menuitem}`: `${classes.Menuitem}`} >
                    <img src={item.image} alt=""/>
                    <span>{item.title}</span>
                    </NavLink>
                
            ))}
            </div>
            <button className={classes.signout}>
                <img src={signout} alt=""/>
                <span>Signout</span>
            </button>
        </div>
    );
}

export default Sidebar;
