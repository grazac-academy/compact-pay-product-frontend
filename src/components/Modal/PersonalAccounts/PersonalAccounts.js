import React, {useState} from 'react'
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import classes from "./PersonalAccounts.module.css";
import Modal from "react-modal";
import ToPersonalAccount from "../../Modal/ToPersonalAccount/ToPersonalAccount"
import Wema from "assets/Dashboard/wemalogo.svg";

const PersonalAccounts = ({onClick}) => {
  
  const [isOpenPersonalAccounts, setIsOpenPersonalAccounts] = useState(false);
  const handleClick = () => setIsOpenPersonalAccounts (false);
  return (
    <div className={classes.NewBeneficial} >
    <div className={classes.SMN}>
    <div className={classes.leftarrow}> 
        <img src={Leftarrow} alt="leftarrow"  onClick={onClick} />
      </div>
      <div  className={classes.Smoney}>
        <h2>Send Money to Personal Account</h2>
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
      <button  onClick={() => setIsOpenPersonalAccounts(true)}
             className={classes.button}>Proceed</button>
      <Modal
        isOpen={isOpenPersonalAccounts}
        className={classes.ModalP}
        overlayClassName={classes.OverlayP}
      >
      <ToPersonalAccount onClick={handleClick}/>
      </Modal>
    </div>
  </div>
  )
}

export default PersonalAccounts