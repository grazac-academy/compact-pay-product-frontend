import classes from "./VerifyPhone.module.css";
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import otp from "assets/Dashboard/otp.svg";
import Modal from 'react-modal';
import { useState} from "react";
import Bvn from "components/Modals/BVNModals/BVN/Bvn";



const VerifyPhone = ({onClick}) => {

    const [modalIsBvnOpen, setModalIsBvnOpen] = useState(false);

    const handleClick = () => setModalIsBvnOpen(false);

  return (
    <div>
            <div className={classes.Verification}>
            <img onClick={onClick}  src={arrowleft} alt="arrowleft"/> 
            <h2>Verify Phone Number</h2>
            <p>Please provide 6- digit OTP Sent to your registered Phone Number.</p>
            </div>

            <div className={classes.verify}>

                    <div className={classes.verify_img}>
                    <img src={otp} alt="otp"/>
                    </div>

                                <label className={classes.verifyinput}> 
                                    <input />
                                    <input />
                                    <input />
                                    <input />
                                    <input />
                                    <input />
                                </label>

                    <Button  onClick={()=> setModalIsBvnOpen(true)} >Proceed</Button>
            </div>

        <Modal isOpen={modalIsBvnOpen}
            className={classes.Modal}
            overlayClassName={classes.Overlay}>
            <Bvn onClick={handleClick}/>
        </Modal>
    </div>
  )
}

export default VerifyPhone