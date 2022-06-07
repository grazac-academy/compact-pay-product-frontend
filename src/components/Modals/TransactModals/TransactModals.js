import close from "assets/Dashboard/close.svg";
import doublearrow from "assets/Dashboard/doublearrow.svg";
import classes from "./TransactModals.module.css";

const TransactModals = ({onClick}) => {
    
  return (
    <div>
        <div className={classes.Funding}>
            <div className={classes.close}>
                <img onClick={onClick} src={close} alt="close"/>
            </div>
            <h1>+₦ 2,400</h1>
            <p>10 May 2022, 8:45PM</p>
            <img className={classes.doublearrow} src={doublearrow} alt="doublearrow" />
        </div>

        <div className={classes.FundWallet}>
            <h4>Fund Wallet</h4>
            <p>Transaction Reference: 100006758983</p>
        </div>

            <div className={classes.Funddetails}>
                <h4>Transaction Details</h4>
                <div className={classes.TransDetails}>
                        <div>
                            <p>Transaction Type</p>
                            <h6>Fund Wallet</h6>
                        </div>
                        <div>
                            <p>Transaction Status</p>
                            <div className={classes.success}>
                            <h5>Successful</h5>
                            </div>
                        </div>
                </div>
                <div  className={classes.TransDetails}>
                        <div>
                            <p>Sender's Bank</p>
                            <h6>GTBank</h6>
                        </div>
                        <div>
                            <p>Account Number</p>
                            <h6 style={{ textAlign: 'right'}}>01237659805</h6>
                </div>
                </div>
                <div>
                        <p>Account Name</p>
                        <h6>Felix Odogwu</h6>
                </div>
            </div>

    </div>
  )
}

export default TransactModals