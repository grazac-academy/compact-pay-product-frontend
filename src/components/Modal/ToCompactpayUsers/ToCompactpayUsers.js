import React, {useState} from 'react'
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import classes from "./ToCompactpayUsers.module.css";
import Modal from "react-modal";
import CompactpayConfirmT from "../../Modal/CompactpayConfiirmT/CompactpayUserConfirmT"

const ToCompactpayUsers = ({onClick}) => {
    const [isOpenToCompactpayUsers, setIsOpenToCompactpayUsers] = useState(false);
    const handleClick = () => setIsOpenToCompactpayUsers (false);
  return (
    <div className={classes.NewBeneficial} >
    <div className={classes.SMN}>
    <div className={classes.leftarrow}> 
        <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
      </div>
      <div  className={classes.Smoney}>
        <h2>Send Money to Compact Pay User</h2>
        <p>send money to your prefered beneficiary</p>
      </div>
    </div>
    <form  className={classes.form}>
    <div  className={classes.formG}>
      <label>Amount to send</label>
      <input type="number" placeholder="Enter amount to send"></input>
      <div className={classes.amount}><p>Wallet Balance:<h4>₦ 100,390,000</h4> </p></div>
    </div>
    
    <div className={classes.formG}>
    <label>Receiver’s Phone Number</label>
    <input type="number" placeholder="Receivers Phone Number" ></input>
    </div>
    <div  className={classes.formG}>
    <label>Receiver’s Name</label>
      <input type="test" placeholder="Receiver’s Name" className={classes.receiver}></input>
    
     </div>
     
    <div  className={classes.narration}>
    <label>Transaction Narration</label>
      <input type="text" placeholder="Enter description here" className={classes.narration}></input>
    </div>
    </form>
    <div>
      <button onClick={() => setIsOpenToCompactpayUsers(true)} 
             className={classes.button}>Proceed</button>
              <Modal
        isOpen={isOpenToCompactpayUsers}
        className={classes.ModalP}
        overlayClassName={classes.OverlayP}
      >
      <CompactpayConfirmT onClick={handleClick}/>
      </Modal>
     
    </div>
   </div>
  )
}

export default ToCompactpayUsers