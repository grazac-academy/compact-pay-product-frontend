import Header from 'components/DashboardPage/Header/Header';
import Sidebar from 'components/DashboardPage/Dashboard/Sidebar';
import classes from './DashboardLayout.module.css';
import { Outlet } from 'react-router-dom';



const DashboardLayout = () => {
  return (
    <div className={classes.dashboard}>
        <Header />
        <div className={classes.dashboard_contain}>
            <Sidebar />
            <div className={classes.dashInfo}><Outlet/></div>
            
            </div>
    </div>
        
  )
}

export default DashboardLayout