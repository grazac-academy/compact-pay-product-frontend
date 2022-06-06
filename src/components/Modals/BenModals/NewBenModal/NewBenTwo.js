import classes from "./NewBenTwo.module.css"
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Modal from 'react-modal';
import { useState} from "react";
import FailedBENModal from "components/Modals/BenModals/SuccessBENModal/FailedBENModal"


Modal.setAppElement('#root');


const NewBenTwo = ({onClick}) => {


    const [modalIsFailedBenOpen, setModalIsFailedBenOpen] = useState(false);


  return (
    <div>
                <div className={classes.Verification}>
                <img onClick={onClick} src={arrowleft} alt="arrowleft"/> 
                <h2>Create New Beneficiary</h2>
                <p>Enter receiver's bank account details to continue</p>
                </div>

                <div className={classes.BenType}>
                            <h4>Beneficiary Type</h4>
                        <select >
                            <option hidden selected disabled>Individual</option>
                            <option >School</option>
                            <option >Charity</option>
                            <option >Family</option>
                        </select>

                            <label className={classes.BenInput}>
                                 <h4>Email Address</h4>
                                 <input placeholder='shalomayobami@gmail.com'/>
                            </label>

                                <h4>Bank Name</h4>
                            <select >
                            <option hidden selected disabled>GTBank</option>
                            <option >Providus Bank</option>
                            <option >First Bank</option>
                            <option >Zenith Bank</option>
                        </select>

                        <label className={classes.BenInput}>
                                 <h4>Account Number</h4>
                                 <input placeholder='0122360450'/>
                        </label>

                        <label className={`${classes.BenInput} ${classes.DapoInput} `}>
                                 <h4>Account Name</h4>
                                 <input placeholder='Dapo Adeleye'/>
                        </label>

                        
                              <Button onClick={()=> setModalIsFailedBenOpen(true)} >Send</Button>
                </div>

        <Modal isOpen={modalIsFailedBenOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <FailedBENModal/>
        </Modal>

    </div>
  )
}

export default NewBenTwo