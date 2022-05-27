import classes from './Dashboard.module.css';
import addfund from 'assets/Dashboard/addfund.svg';
import sendmoney from 'assets/Dashboard/sendmoney.svg';
import { MdNavigateNext } from 'react-icons/md';
import DashboardChart from 'components/DashboardPage/DashboardChart/DashboardChart';
import Transaction from 'components/DashboardPage/Transaction/Transaction';
import Button from 'components/UI/Button/button';

const Dashboard = () => {
    return (
        // <DashboardLayout>
            <div className={classes.dashInfo}>
                <div className={classes.wallet}>
                    <div className={classes.wallet_contain}>
                        <h4>Wallet information</h4>
                        <div className={classes.Money}>
                            <div  className={classes.Naira}>
                                <p>Naira Wallet</p>
                                <h5>Wallet Balance</h5>
                                <h2>₦ 100,390,000</h2>
                                <Button >
                                    <img src={addfund} alt=""/>
                                    <span>Fund Wallet</span>
                                </Button>
                            </div>
                            <div className={classes.Send} >
                                <img src={sendmoney} alt=""/>
                                <h3>Send Money</h3>
                                <p>Access seamless crossborder payment</p>
                                <MdNavigateNext className={classes.MdNavigateNext}/>
                            </div>
                        </div>
                    </div>
                    <div  className={classes.graph}>
                    <DashboardChart />
                    </div>
                </div>
                <div className={classes.Transaction}>
                    <Transaction />
                </div>
            </div>
        // </DashboardLayout>
    );
}

export default Dashboard;