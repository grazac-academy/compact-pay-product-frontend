
import classes from "./FailedTransaction.module.css";
import failed from "assets/Dashboard/failedx.svg";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import  egg from "assets/Dashboard/egg.svg";


const FailedTransaction = ({ onClick }) => {
  return (
    <div className={classes.ReceiversDetails}>
      <div className={classes.RD}>
        <div className={classes.leftarrow}>
          <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
        </div>
        <div className={classes.Rdetails}>
          <h2>Transaction Failed</h2>
        </div>
      </div>
        <div className={classes.thankyou}>
          <img src={failed} alt="pathgood" />

        </div>
      <div className={classes.TransactionType}>
      <div className={classes.thank}>
        <div className={classes.pathgood}>
          <h3>Failed</h3>
          <p>Oops! Seems something went wrong</p>
        </div>

        <hr className={classes.line}></hr>
        <img src={egg} alt="firstegg" />
      <img className={classes.eggRight} src={egg} alt="firstegg" />
      </div>
        <div className={classes.TransactionBox}>
          <div className={classes.TransactionBox1}>
            <div className={classes.Text}>
              <p>Date</p>
              <h6>01 June, 2022</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Name </p>
              <h6>Joe Mighty. H</h6>
            </div>
            <div className={classes.Text}>
              <p>Amount Sent</p>
              <h6>₦ 390,000</h6>
            </div>
            <div className={classes.Text}>
              <p>Transaction Fee</p>
              <h6>₦ 500</h6>
            </div>
          </div>
          <div className={classes.TransactionBox2}>
            <div className={classes.Text}>
              <p>Time</p>
              <h6>11:32 AM</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Currency</p>
              <h6>Ghana Cedis-(GHC)</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Amount</p>
              <h6>₵7085.62</h6>
            </div>
          </div>
       
        </div>
      </div>
       
      
      
      <div className={classes.buttonF}>
        <button className={classes.button}>Okay</button>
      </div>
    </div>
  )
}

export default FailedTransaction