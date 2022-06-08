
import classes from "./FilledNewBeneficiaries.module.css";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import Modal from "react-modal";
import React, {useState} from 'react'
import ReceiversDetails from "../../Modal/ReceiversDetails/ReceiversDetails"

const FilledNewBeneficiaries = ({onClick} ) => {

    const [isOpenFilledNewBeneficiary, setIsOpenFilledBeneficiary] = useState(false);

    const handleClick = () => setIsOpenFilledBeneficiary (false);

   
  return (
    <div>
         <div className={classes.NewBeneficial} >
      <div className={classes.SMN}>
      <div className={classes.leftarrow}> 
          <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
        </div>
        <div  className={classes.Smoney}>
          <h2>Send Money to New Beneficiary</h2>
          <p>send money to your prefered beneficiary</p>
        </div>
      </div>
      <form  className={classes.form}>
      <div className={classes.Amount}>
        <label>Amount to send</label>
        <input type="number" placeholder="Enter amount to send"></input>
        <div className={classes.amount}><p>Wallet Balance:<h4>₦ 100,390,000</h4> </p></div>
      </div>
      
      <div className={classes.formG}>
      <label>Receiver’s Currency</label>
        <select className={classes.selected}>
          <option disabled selected hidden>Select Currency</option>
          <option>Ghana Cedis- (GHC)</option>
          <option>Nigeria Naira (NGN)</option>
          <option>United Kingdom Pound (GBP)</option>
          <option> USA US Dollar (USD)</option>
        </select>
      </div>
      <div  className={classes.formG}>
      <label>Receiver’s Amount</label>
        <input type="test" placeholder="Receivers Amount" className={classes.receiver}></input>
      
           <label></label>
           <input className={classes.exchange} placeholder="Exchange Rate"></input>
       </div>
       <div  className={classes.formG}>
       <label>Transaction Fee</label>
           <input type="number"  className={classes.receiver}></input>
       </div>
      <div  className={classes.formG}>
      <label>Transaction Narration</label>
        <input type="text" placeholder="Enter description here" className={classes.narration}></input>
      </div>
      </form>
      <div>
        <button onClick={() => setIsOpenFilledBeneficiary(true)} 
               className={classes.button}>Proceed</button>
                <Modal
          isOpen={isOpenFilledNewBeneficiary}
          className={classes.ModalP}
          overlayClassName={classes.OverlayP}
        >
        <ReceiversDetails onClick={handleClick}/>
        </Modal>
       
      </div>
    </div>
    </div>
  )
}

export default FilledNewBeneficiaries