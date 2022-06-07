import classes from "./PhoneNum.module.css";
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Modal from 'react-modal';
import { useState} from "react";
import VerifyPhone from "components/Modals/BVNModals/PhoneNumber/VerifyPhone";


Modal.setAppElement('#root');


const PhoneNum = ({onClick}) => {


const [modalIsVerifyOpen, setModalIsVerifyOpen] = useState(false);

  const handleClick = () => setModalIsVerifyOpen(false);

  return (
    <div>
            <div className={classes.Verification}>
            <img onClick={onClick}  src={arrowleft} alt="arrowleft"/> 
            <h2>Verify Phone Number</h2>
            <p>Please provide us with your Phone Number</p>
            </div>

            <div className={classes.phone}>
                <label className={classes.PhoneNum}>
                    <h4>Enter Phone Number</h4>
                    <input placeholder='081319778999'/>
                </label>
                
                <Button  onClick={()=>setModalIsVerifyOpen(true)} >Proceed</Button>
            </div>
        

        <Modal isOpen={modalIsVerifyOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
        <VerifyPhone onClick={handleClick}/>
      </Modal>
    </div>
  )
}

export default PhoneNum