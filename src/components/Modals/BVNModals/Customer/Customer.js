import classes from "./Customer.module.css"
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Button from "components/UI/Button/button";
import Modal from 'react-modal';
import { useState} from "react";
import ID from "components/Modals/BVNModals/ID/ID"

Modal.setAppElement('#root');



const Customer = ({onClick}) => {


  const [modalIsIDOpen, setModalIsIDOpen] = useState(false);
  
  const handleClick = () => setModalIsIDOpen(false);

  return (
      
    <div className={classes.Customer}>
        <div className={classes.Verification}>
        <img onClick={onClick}  src={arrowleft} alt="arrowleft"/> 
        <h2>Customer Verification</h2>
        <p>Please provide us with the following informations</p>
        </div>
        
        <div  className={classes.CustomerSelect}>
          <h4>Account Type</h4>
          <select >
              <option>BUSINESS</option>
              <option>EDUCATION</option>
              <option>CHURCH</option>
          </select>
          <h4>Occupation</h4>
          <select >
              <option>MARKETING</option>
              <option>E-COMMERCE</option>
              <option>BLOG</option>
          </select>

          <Button onClick={()=> setModalIsIDOpen(true)}>Proceed</Button>
        </div>

        <Modal isOpen={modalIsIDOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
           <ID  onClick={handleClick} />
        </Modal>

    </div>
  )
}

export default Customer