import classes from "./CompactpayConfirmT.module.css";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import Modal from "react-modal";
import React, { useState } from "react";
import TransactionSuccessful from "../TransactionSuccessful/TransactionSuccessful";

const CompactpayConfirmT = ({ onClick }) => {

  const [isOpenCompactpayConfirmT, setIsOpenCompactpayConfirmT] = useState(false);

  const handleClick = () => setIsOpenCompactpayConfirmT (false);


  return (
    <div className={classes.ReceiversDetails}>
      <div className={classes.RD}>
        <div className={classes.leftarrow}>
          <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
        </div>
        <div className={classes.Rdetails}>
          <h2>Confirm Transaction</h2>
          <p>Review transaction details and confirm to proceed</p>
        </div>
      </div>
      <div className={classes.TransactionType}>
        <div  className={classes.TransactionBox}>
          <div  className={classes.TransactionBox1}>
            <div className={classes.Text}>
              <p>Transaction Type</p>
              <h6>Fund Transfer</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Phone Number </p>
              <h6>+2348131977989</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Name</p>
              <h6>Olapade Bimpe</h6>
            </div>
            <div className={classes.Text}>
              <p>Account Name</p>
              <h6>Joe Mighty. H</h6>
            </div>
           
          </div>
          <div className={classes.TransactionBox2}>
            <div className={classes.Text}>
              <p>Amount to send</p>
              <h6>₦ 390,000</h6>
            </div>
            <div className={classes.Text}>
              <p>Transaction Fee</p>
              <h6>₦ 500</h6>
            </div>
          </div>
        </div>
      </div>
      <div  className={classes.transactionpin } >
      <div className={classes.ttext }><p>Enter Transaction PIN</p></div>
      <div maxLength={1} className={classes.Pin }>
          <input></input>
          <input></input>
          <input ></input>
          <input ></input>
          <input ></input>
          <input ></input>
      </div>
      </div>
      <div className={classes.buttonF}>
        <button onClick={() => setIsOpenCompactpayConfirmT(true)} className={classes.button}>Proceed</button>
        <Modal
          isOpen={isOpenCompactpayConfirmT}
          className={classes.ModalP}
          overlayClassName={classes.OverlayP}
        >
        <TransactionSuccessful onClick={handleClick}/>
        </Modal>
      </div>
    </div>
  );
};

export default CompactpayConfirmT;
