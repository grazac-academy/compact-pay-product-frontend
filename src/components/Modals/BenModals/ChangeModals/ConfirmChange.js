import classes from "./ConfirmChange.module.css"
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import ChangeFail from "components/Modals/BenModals/ChangeModals/ChangeResult/ChangeFail";
import Modal from 'react-modal';
import { useState} from "react";





const ConfirmChange = ({onClick}) => {

    const [modalFailIsOpen, setModalFailIsOpen] = useState(false);

  return (
    <div>
                
                <div className={classes.Verification}>
                <img onClick={onClick} src={arrowleft} alt="arrowleft"/> 
                <h2>Confirm Action</h2>
                <p>Review transaction details and confirm to proceed</p>
                </div>

            <div className={classes.Confirm}>

                <h5>Enter Transaction PIN</h5>

                             <label className={classes.confirmInput}> 
                                 <input />
                                 <input />
                                 <input />
                                 <input />
                                 <input />
                                 <input />
                            </label>

                <Button  onClick={()=> setModalFailIsOpen(true)} >Proceed</Button>
            </div>

        <Modal isOpen={modalFailIsOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <ChangeFail/>
        </Modal>


    </div>
  )
}

export default ConfirmChange