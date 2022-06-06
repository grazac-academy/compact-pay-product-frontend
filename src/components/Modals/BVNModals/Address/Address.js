import classes from "./Address.module.css"
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Modal from 'react-modal';
import { useState} from "react";
import IDTwo from "components/Modals/BVNModals/IDTwo/IDTwo"

Modal.setAppElement('#root');

const Address = ({onClick}) => {

    
    const [modalIsIDtwoOpen, setModalIsIDtwoOpen] = useState(false);

    
    const handleClick = () => setModalIsIDtwoOpen(false);


  return (
    <div>
                <div className={classes.Verification}>
                <img onClick={onClick}  src={arrowleft} alt="arrowleft"/> 
                <h2>Address Verification</h2>
                <p>Please provide us with the following informations</p>
                </div>
        <div className={classes.labels}>
            <label className={classes.Address}>
                <h4>Address</h4>
                <input placeholder='Enter your address here'/>
            </label>
            <label className={classes.Address}>
                <h4>Country</h4>
                <input placeholder='Enter your country here'/>
            </label>
            <label className={classes.Address}>
                <h4>Zip Code</h4>
                <input placeholder='Enter your zip code here'/>
            </label>
            <div className={classes.state}>
            <label className={classes.Address}>
                <h4>State</h4>
                <input placeholder='Enter your state here'/>
            </label>
            <label className={classes.Address}>
                <h4>City</h4>
                <input placeholder='Enter your city here'/>
            </label>
            </div>

            
            <Button  onClick={()=> setModalIsIDtwoOpen(true)} >Proceed</Button>
        </div>

        <Modal isOpen={modalIsIDtwoOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <IDTwo onClick={handleClick} />
        </Modal>

    </div>
  )
}

export default Address