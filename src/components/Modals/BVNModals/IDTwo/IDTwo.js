import classes from "./IDTwo.module.css";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import dragfile from "assets/Dashboard/dragfile.svg";
import Button from "components/UI/Button/button";import Modal from 'react-modal';
import { useState} from "react";
import SuccessTwo from "components/Modals/BVNModals/SuccessTwo/SuccessTwo";

Modal.setAppElement('#root');


const IDTwo = ({onClick}) => {

  
  const [modalIsSuccessTwoOpen, setModalIsSuccessTwoOpen] = useState(false);

  return (
    <div>
            <div className={classes.Verification}>
            <img onClick={onClick} src={arrowleft} alt="arrowleft"/> 
            <h2>ID Verification</h2>
            <p>Please provide us with the following informations</p>
            </div>

            <div className={classes.bill}>
              <h4>Utility Bill</h4>
              <select >
                  <option hidden selected disabled>Select any utility bill</option>
                  <option >Light Bill</option>
                  <option >Water Bill</option>
                  <option >Rent</option>
              </select>

              <h4>Upload File</h4>
                <form>
                    <div>
                        <img src={dragfile} alt =""/>
                    </div> 
                    <p>Drag and drop your file here</p>
                    <p>OR</p>
                    <label className={classes.file}>
                    <input type="file"/>
                    Browse File
                    </label>
                </form>
                <Button  onClick={()=> setModalIsSuccessTwoOpen(true)} >Proceed</Button>

            </div>
            <Modal isOpen={modalIsSuccessTwoOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <SuccessTwo />
        </Modal>

    </div>
  )
}

export default IDTwo