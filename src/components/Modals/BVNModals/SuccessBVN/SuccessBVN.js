import successBVN from "assets/Dashboard/bvnsucessful.svg"
import Button from "components/UI/Button/button";
import classes from "./SuccessBVN.module.css"
import Modal from 'react-modal';
import { useState} from "react";
import Customer from "components/Modals/BVNModals/Customer/Customer"

Modal.setAppElement('#root');


const SuccessBVN = () => {

    const [modalIsCustomerOpen, setModalIsCustomerOpen] = useState(false);

    const handleClick = () => setModalIsCustomerOpen(false);

  return (
    <div className={classes.Success}>
        <div className={classes.Success_img}>
        <img src={successBVN} alt="successBVN" />
        </div>
        <h2>BVN Verified Successfully</h2>
        <p>you have succesfully created your compact pay account, to proceed kindly provide us with the following information</p>
        <Button onClick={()=> setModalIsCustomerOpen(true)}>Proceed</Button>

        <Modal isOpen={modalIsCustomerOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
            <Customer onClick={handleClick}/>
        </Modal>
    </div>
  )
}

export default SuccessBVN