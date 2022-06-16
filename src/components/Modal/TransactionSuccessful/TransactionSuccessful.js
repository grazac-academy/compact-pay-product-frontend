import classes from "./TransactionSuccessful.module.css";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import success from "assets/Dashboard/thnks.svg";
import Modal from "react-modal";
import React, { useState } from "react";
import FailedTransaction from "components/Modal/FailedTransaction/FailedTransaction";
import  egg from "assets/Dashboard/egg.svg";
import Toggle from "assets/Dashboard/Toggle.svg";


const TransactionSuccessful = ({ onClick }) => {

    const [isOpenTransactionSuccessful, setIsOpenTransactionSuccessful] = useState(false);

    const handleClick = () => setIsOpenTransactionSuccessful (false);
  

  return (
    <div className={classes.ReceiversDetails}>
    <div className={classes.RD}>
      <div className={classes.leftarrow}>
        <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
      </div>
      <div className={classes.Rdetails}>
        <h2>Transaction Successful</h2>
      </div>
    </div>
      <div className={classes.thankyou}>
        <img src={success} alt="pathgood" />

      </div>
    <div className={classes.TransactionType}>
    <div className={classes.thank}>
      <div className={classes.pathgood}>
        <h3>Thanks You</h3>
        <p>Your transaction was successful</p>
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
     
     <div className={classes.ttext}><h4>Save as beneficiary</h4> <img src={Toggle} alt="toggle" /></div>
      
      
      <div className={classes.buttonF}>
        <button onClick={() => setIsOpenTransactionSuccessful(true)} className={classes.button}>Okay</button>
        <Modal
          isOpen={isOpenTransactionSuccessful} 
          className={classes.ModalP}
          overlayClassName={classes.OverlayP}
        >
        < FailedTransaction onClick={handleClick}/>
        </Modal>
      </div>
    </div>
  );
};

export default TransactionSuccessful;
