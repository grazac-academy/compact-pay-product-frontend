import classes from "./AddAccTwo.module.css"
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Confirm from "components/Modals/BenModals/AccountModal/Confirm";
import Modal from 'react-modal';
import { useState} from "react";


Modal.setAppElement('#root');


const AddAccTwo = ({onClick}) => {

    const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);

    const handleClick = () => setModalConfirmIsOpen(false);

  return (
        <div>
                <div className={classes.Verification}>
                <img  onClick={onClick} src={arrowleft} alt="arrowleft"/> 
                <h2>Add Personal Account</h2>
                <p>Enter receiver's bank account details to continue</p>
                </div>

                <div className={classes.AddAcc}>
                            <h4>Bank Name</h4>
                        <select >
                            <option hidden selected disabled>GTBank</option>
                            <option >First Bank</option>
                            <option >Zenith Bank</option>
                            <option >UBA</option>
                        </select>

                            <label className={classes.AddInput}>
                                 <h4>Account Number</h4>
                                 <input placeholder='0122360450'/>
                            </label>

                            <label className={`${classes.AddInput} ${classes.AdeInput}`}>
                                 <h4>Account Name</h4>
                                 <input placeholder='Dapo Adeleye'/>
                            </label>

                    <Button onClick={()=> setModalConfirmIsOpen(true)} >Proceed</Button>
                </div>

        <Modal isOpen={modalConfirmIsOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <Confirm  onClick={handleClick}/>
        </Modal>

        
    </div>
  )
}

export default AddAccTwo