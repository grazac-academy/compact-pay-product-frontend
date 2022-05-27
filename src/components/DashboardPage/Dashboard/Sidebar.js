import {sideNavbar} from '../../../constants/index';
import classes from './Sidebar.module.css'
import signout from 'assets/Dashboard/signout_icon.svg';
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className={classes.sidebar}>
            <div className={classes.menu}>
            {sideNavbar.map((item, index) => (
                <div className={selected===index?`${classes.active} ${classes.Menuitem}`: `${classes.Menuitem}`}
                key={index}
                onClick={()=>setSelected(index)}
                >
                    <Link to={item.link}>
                    <img src={item.image} alt=""/>
                    <span>{item.title}</span>
                    </Link>
                </div>
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