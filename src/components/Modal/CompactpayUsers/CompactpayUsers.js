import React, {useState} from 'react'
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import classes from "./CompactpayUsers.module.css";
import Modal from "react-modal";
import ToCompactpayUsers from "../../Modal/ToCompactpayUsers/ToCompactpayUsers"

const CompactpayUsers = ({onClick}) => {
    const [isOpenCompactpayUsers, setIsOpenCompactpayUsers] = useState(false);
    const handleClick = () => setIsOpenCompactpayUsers (false);
  return (
    <div className={classes.NewBeneficial} >
    <div className={classes.SMN}>
    <div className={classes.leftarrow}> 
        <img src={Leftarrow} alt="leftarrow"  onClick={onClick} />
      </div>
      <div  className={classes.Smoney}>
        <h2>Send Money to Compact Pay User</h2>
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
    <label>Receiver’s Phone Number</label>
    <input type="number" placeholder="Enter Compact pay User Number"></input>
    </div>
   
    <div className={classes.formE}>
    <label>Transaction Narration</label>
      <input type="text" placeholder="Enter description here" className={classes.narration}></input>
    </div>
    </form>
    <div className={classes.buttonE}>
      <button  onClick={() => setIsOpenCompactpayUsers(true)}
             className={classes.button}>Proceed</button>
      <Modal
        isOpen={isOpenCompactpayUsers}
        className={classes.ModalP}
        overlayClassName={classes.OverlayP}
      >
      <ToCompactpayUsers onClick={handleClick}/>
      </Modal>
    </div>
  </div>
  )
}

export default CompactpayUsers