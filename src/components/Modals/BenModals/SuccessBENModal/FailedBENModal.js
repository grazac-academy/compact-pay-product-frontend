import FailedBEN from "assets/Dashboard/FailedBEN.svg"
import Button from "components/UI/Button/button";
import classes from "./FailedBENModal.module.css";
import Modal from 'react-modal';
import { useState} from "react";
import SuccessBEN from "components/Modals/BenModals/SuccessBENModal/SuccessBEN";


Modal.setAppElement('#root');


const FailedBENModal = () => {

  const [modalIsSuccessBenOpen, setModalIsSuccessBenOpen] = useState(false);


  return (
    <div className={classes.Failed}>
        <div className={classes.Failed_img}>
        <img src={FailedBEN} alt="FailedBEN" />
        </div>
        <h2>Adding Beneficiary Failed</h2>
        <Button onClick={()=> setModalIsSuccessBenOpen(true)}  >Retry</Button>

        <Modal isOpen={modalIsSuccessBenOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <SuccessBEN/>
        </Modal>
    </div>
  )
}

export default FailedBENModal