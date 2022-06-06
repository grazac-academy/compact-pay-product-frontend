import FailedBEN from "assets/Dashboard/FailedBEN.svg"
import Button from "components/UI/Button/button";
import classes from "./FailedAcc.module.css";
import SuccessAcc from "components/Modals/BenModals/AccountModal/SuccessAcc/SuccessAcc";
import Modal from 'react-modal';
import { useState} from "react";

Modal.setAppElement('#root');

const FailedAcc = () => {

    
  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);

  return (
        <div>

            <div className={classes.Failed}>
                <div className={classes.Failed_img}>
                <img src={FailedBEN} alt="FailedBEN" />
                </div>
                <h2>Adding Personal Account Failed</h2>
                <Button onClick={()=> setModalSuccessIsOpen(true)}  >Retry</Button>

                <Modal isOpen={modalSuccessIsOpen}
                className={classes.Modal}
                overlayClassName={classes.Overlay}>
                <SuccessAcc/>
                </Modal>
            </div>

    </div>
  )
}

export default FailedAcc