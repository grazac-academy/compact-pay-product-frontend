import Button from "components/UI/Button/button";
import welcome from "assets/Modals/welcome verification.png";
import classes from "./WelcomeModal.module.css";
import Modal from 'react-modal';
import { useState} from "react";
import PhoneNum from "components/Modals/BVNModals/PhoneNumber/PhoneNum";

Modal.setAppElement('#root');

const WelcomeModal = () => {

  const [modalIsPhoneOpen, setModalIsPhoneOpen] = useState(false);

  const handleClick = () => setModalIsPhoneOpen(false);

  return (
    <div className={classes.welcome}>
      <div className={classes.welcomeimg}>
      <img src={welcome} alt="welcome" />
      </div>
      <h2>Yaaaaay!! You're Welcome</h2>
      <p>you have succesfully created your compact pay account, to proceed kindly provide us with the following information</p>
      <Button onClick={()=>setModalIsPhoneOpen(true)} >Get Started</Button>


      <Modal isOpen={modalIsPhoneOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
        <PhoneNum onClick={handleClick}/>
      </Modal>
    </div>
  )
}



export default WelcomeModal