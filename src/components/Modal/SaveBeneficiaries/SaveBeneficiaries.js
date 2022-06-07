import React, {useState} from 'react'
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import classes from "./SaveBeneficiaries.module.css";
import Modal from "react-modal";
import  ToBeneficiary from "../../Modal/ToBeneficiary/ToBeneficiary";

const SaveBeneficiary = ({onClick}) => {
  const [isOpenSaveBeneficiary, setIsOpenSaveBeneficiary] = useState(false);

  const handleClick = () => setIsOpenSaveBeneficiary (false);
  return (
    
      <div className={classes.SaveBeneficial} >
      <div className={classes.SMN}>
      <div className={classes.leftarrow}> 
          <img src={Leftarrow} alt="leftarrow"  onClick={onClick} />
        </div>
        <div  className={classes.Smoney}>
          <h2>Send Money to Beneficiary</h2>
          <p>send money to your prefered beneficiary</p>
        </div>
      </div>
      <form  className={classes.form}>
      <div className={classes.formE}>
        <label>Amount to send</label>
        <input type="number" placeholder="Enter amount to send"></input>
        <div className={classes.amount}><p>Wallet Balance:<h4>₦ 100,390,000</h4> </p></div>
      </div>
      <div className={classes.formE}>
      <label>Receiver’s Currency</label>
        <select className={classes.selected}>
          <option disabled selected hidden>Select Currency</option>
          <option>Ghana Cedis- (GHC)</option>
          <option>Nigeria Naira (NGN)</option>
          <option>United Kingdom Pound (GBP)</option>
          <option> USA US Dollar (USD)</option>
        </select>
      </div>
      <div className={classes.formE}>
      <label>Receiver’s Amount</label>
        <input type="test" placeholder="Receivers Amount" className={classes.receiver}></input>
      
      </div>
      <div className={classes.formE}>
      <label>Transaction Narration</label>
        <input type="text" placeholder="Enter description here" className={classes.narration}></input>
      </div>
      </form>
      <div className={classes.buttonE}>
        <button  onClick={() => setIsOpenSaveBeneficiary(true)}
               className={classes.button}>Proceed</button>
        <Modal
          isOpen={isOpenSaveBeneficiary}
          className={classes.ModalP}
          overlayClassName={classes.OverlayP}
        >
        <ToBeneficiary onClick={handleClick}/>
        </Modal>
      </div>
    </div>
  )
}


export default SaveBeneficiary