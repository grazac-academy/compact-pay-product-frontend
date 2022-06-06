import classes from "./AddAcc.module.css"
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import AddAccTwo from "components/Modals/BenModals/AccountModal/AddAccTwo";
import Modal from 'react-modal';
import { useState} from "react";

Modal.setAppElement('#root');



const AddAcc = ({onClick}) => {

            
    const [modalAddTwoIsOpen, setModalAddTwoIsOpen] = useState(false);

    
    const handleClick = () => setModalAddTwoIsOpen(false);

  return (
    <div>
                <div className={classes.Verification}>
                <img onClick={onClick} src={arrowleft} alt="arrowleft"/> 
                <h2>Add Personal Account</h2>
                <p>Enter receiver's bank account details to continue</p>
                </div>

                <div className={classes.AddAcc}>
                            <h4>Bank Name</h4>
                        <select >
                            <option hidden selected disabled>Enter Bank Name</option>
                            <option >GTbank</option>
                            <option >First Bank</option>
                            <option >Zenith Bank</option>
                            <option >UBA</option>
                        </select>

                            <label className={classes.AddInput}>
                                 <h4>Account Number</h4>
                                 <input placeholder='Enter Account Number'/>
                            </label>

                    <Button  onClick={()=> setModalAddTwoIsOpen(true)}>Proceed</Button>
                </div>

        <Modal isOpen={modalAddTwoIsOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <AddAccTwo  onClick={handleClick}/>
        </Modal>
    </div>
  )
}

export default AddAcc