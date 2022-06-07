import FailedBEN from "assets/Dashboard/FailedBEN.svg"
import Button from "components/UI/Button/button";
import classes from "./ChangeFail.module.css";
import ChangeSuccess from "components/Modals/BenModals/ChangeModals/ChangeResult/ChangeSuccess";
import Modal from 'react-modal';
import { useState} from "react";

Modal.setAppElement('#root');




const ChangeFail = () => {

    
  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);

  return (
        <div> 
                <div className={classes.Failed}>
                    <div className={classes.Failed_img}>
                    <img src={FailedBEN} alt="FailedBEN" />
                    </div>
                    <h2>Changing personal Account failed</h2>
                    <Button onClick={()=> setModalSuccessIsOpen(true)}  >Retry</Button>

                    <Modal isOpen={modalSuccessIsOpen}
                    className={classes.Modal}
                    overlayClassName={classes.Overlay}>
                    <ChangeSuccess/>
                    </Modal>
            </div>
        </div>
  )
}

export default ChangeFail