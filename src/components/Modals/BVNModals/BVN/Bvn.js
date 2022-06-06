import classes from './Bvn.module.css';
import Modal from 'react-modal';
import { useState} from "react";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Button from "components/UI/Button/button";
import SuccessBVN from "components/Modals/BVNModals/SuccessBVN/SuccessBVN";

Modal.setAppElement('#root');

const Bvn = ({onClick}) => {

  const [modalIsSucessOpen, setModalIsSucessOpen] = useState(false);

  const Years = [...Array(new Date().getFullYear() - 1899).keys()].map((e)=>e+1900)
  const Months = ['January','February','March', 'April', 'May','June', 'July', 'August','September','October','November','December'];
  const Days = [...Array.from({length: 31}, (_, i) => i + 1)]

  return (
    <div className={classes.BVN}>
      <div className={classes.Verification}>
        <img onClick={onClick}  src={arrowleft} alt="arrowleft"/> 
        <h2>BVN Verification</h2>
        <p>Please provide us with the following informations</p>
      </div>
      <div className={classes.bvnwidth}>
      <label className={classes.bvnnumber}>
        <h4>Bank Verification Number</h4>
        <input placeholder='22234534533'/>
      </label>
      <div >
        <h4>Date of Birth</h4>
        <label className={classes.labelselect}>
        <select >
        <option disabled selected hidden>Days</option>
        {Days.map((item) => (<option>{item}</option>))}
        </select>
        <select >
          <option disabled selected hidden>Month</option>
        {Months.map((item) => (<option>{item}</option>))}
        </select>
        <select >
        <option disabled selected hidden>Year</option>
          {Years.map((item) => (<option>{item}</option>))}
        </select>
        </label>
      </div>
          <Button onClick={()=> setModalIsSucessOpen(true)}>Proceed</Button>
      </div>
      <Modal isOpen={modalIsSucessOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <SuccessBVN />
      </Modal>
    </div>
  )
}

export default Bvn