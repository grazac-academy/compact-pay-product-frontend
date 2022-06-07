import React, {useState} from 'react'
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import classes from "./ToPersonalAccount.module.css";
import Modal from "react-modal";
import CompactpayConfirmT from "../../Modal/CompactpayConfiirmT/CompactpayUserConfirmT"
import Wema from "assets/Dashboard/wemalogo.svg";

const  ToPersonalAccount = ({onClick}) => {
  
  const [isOpenToPersonalAccount, setIsOpenToPersonalAccount] = useState(false);
  const handleClick = () => setIsOpenToPersonalAccount (false);
  return (
    <div className={classes.NewBeneficial} >
    <div className={classes.SMN}>
    <div className={classes.leftarrow}> 
        <img src={Leftarrow} alt="leftarrow"  onClick={onClick} />
      </div>
      <div  className={classes.Smoney}>
        <h2>Send Money to Personal Accountr</h2>
        <p>send money to your prefered beneficiary</p>
      </div>
    </div>
    <form  className={classes.form}>

    <div className={classes.search}>
         <div  className={classes.logo}>
         <img src={Wema}   alt="wemabank LOGO" />
         <div className={classes.text}>
             <h4>Adebisi Oyeniya</h4>
             <p>wemabank - 023482949</p>
         </div>
         </div>
         </div>
    <div className={classes.formE}>
      <label>Amount to send</label>
      <input type="number" placeholder="Enter amount to send"></input>
      <div className={classes.amount}><p>Wallet Balance:<h4>₦ 100,390,000</h4> </p></div>
    </div>
    
   
    <div className={classes.narration}>
    <label>Transaction Narration</label>
      <input type="text" placeholder="Enter description here" className={classes.narration}></input>
    </div>
    </form>
    <div className={classes.buttonE}>
      <button  onClick={() => setIsOpenToPersonalAccount(true)}
             className={classes.button}>Proceed</button>
      <Modal
        isOpen={isOpenToPersonalAccount}
        className={classes.ModalP}
        overlayClassName={classes.OverlayP}
      >
      <CompactpayConfirmT onClick={handleClick}/>
      </Modal>
    </div>
  </div>
  )
}

export default ToPersonalAccount