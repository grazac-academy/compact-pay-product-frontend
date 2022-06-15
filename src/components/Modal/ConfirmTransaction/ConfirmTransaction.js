import classes from "./Confirmtransaction.module.css";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import Modal from "react-modal";
import React, { useState } from "react";
import TransactionSuccessful from "../../Modal/TransactionSuccessful/TransactionSuccessful";


const ConfirmTransaction = ({ onClick }) => {

  const [isOpenConfirmTransaction, setIsOpenConfirmTransaction] = useState(false);

  const handleClick = () => setIsOpenConfirmTransaction (false);


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
              <p>Bank Name </p>
              <h6>Guaranty Trust Bank</h6>
            </div>
            <div className={classes.Text}>
              <p>Account Number</p>
              <h6>0353678654</h6>
            </div>
            <div className={classes.Text}>
              <p>Account Name</p>
              <h6>Joe Mighty. H</h6>
            </div>
            <div className={classes.Text}>
              <p>Transaction Narration</p>
              <h6>Joe's School Fee</h6>
            </div>
          </div>
          <div className={classes.TransactionBox2}>
            <div className={classes.Text}>
              <p>Amount to send</p>
              <h6>₦ 390,000</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Currency</p>
              <h6>Ghana Cedis-(GHC)</h6>
            </div>
            <div className={classes.Text}>
              <p>Receiver’s Amount</p>
              <h6>₵7085.62</h6>
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
        <button onClick={() => setIsOpenConfirmTransaction(true)} className={classes.button}>Proceed</button>
        <Modal
          isOpen={isOpenConfirmTransaction}
          className={classes.ModalP}
          overlayClassName={classes.OverlayP}
        >
        <TransactionSuccessful onClick={handleClick}/>
        </Modal>
      </div>
    </div>
  );
};

export default ConfirmTransaction;
