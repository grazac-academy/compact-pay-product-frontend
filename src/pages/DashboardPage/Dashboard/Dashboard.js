import classes from "./Dashboard.module.css";
import addfund from "assets/Dashboard/addfund.svg";
import sendmoney from "assets/Dashboard/sendmoney.svg";
import { MdNavigateNext } from "react-icons/md";
import DashboardChart from "components/DashboardPage/DashboardChart/DashboardChart";
import Transaction from "components/DashboardPage/Transaction/Transaction";
import Button from "components/UI/Button/button";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import WelcomeModal from "components/Modals/BVNModals/WelcomeModal/WelcomeModal";
import FundWallet from "components/Modals/FundModal/FundWallet";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalFundIsOpen, setModalFundIsOpen] = useState(false);

  const handleClick = () => setModalFundIsOpen(false);

  useEffect(() => {
    if (Dashboard) {
      setModalIsOpen(true);
    }
  }, []);

  return (
    <div className={classes.dashInfo}>
      <div className={classes.wallet}>
        <div className={classes.wallet_contain}>
          <h4>Wallet information</h4>
          <div className={classes.Money}>
            <div className={classes.Naira}>
              <p>Naira Wallet</p>
              <h5>Wallet Balance</h5>
              <h2>₦ 100,390,000</h2>
=======
import SendMoney from "components/Modal/SendMoney/SendMoney";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import WelcomeModal from "components/Modals/BVNModals/WelcomeModal/WelcomeModal";
import FundWallet from "components/Modals/FundModal/FundWallet";

Modal.setAppElement("#root");

const Dashboard = ( ) => {
  
   const [modalSendIsOpen, setModalSendIsOpen] = useState(false);

   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalFundIsOpen, setModalFundIsOpen] = useState(false);
 
   const handleClick = () => setModalFundIsOpen(false);
   const handleSendClick = () => setModalSendIsOpen(false);
 
   useEffect(() => {
     if (Dashboard) {
       setModalIsOpen(true);
     }
   }, []);

  


  return (

    
    <div className={classes.dashInfo}>
      <div className={classes.wallet}>
        <div className={classes.wallet_contain}>
          <h4>Wallet information</h4>
          <div className={classes.Money}>
            <div className={classes.Naira}>
              <p>Naira Wallet</p>
              <h5>Wallet Balance</h5>
              <h2>₦ 100,390,000</h2>

>>>>>>> main
              <Button onClick={() => setModalFundIsOpen(true)}>
                <img src={addfund} alt="" />
                <span>Fund Wallet</span>
              </Button>
<<<<<<< HEAD
=======
      
              <div onClick={() => setModalSendIsOpen(true)} className={classes.miniSend} >
              <img src={sendmoney} alt="" />
              <p>Send Money</p>
              </div>
>>>>>>> main
            </div>
            <div className={classes.Send}>
              <img src={sendmoney} alt="" />
              <h3>Send Money</h3>
              <p>Access seamless crossborder payment</p>
<<<<<<< HEAD
              <MdNavigateNext className={classes.MdNavigateNext} />
            </div>
          </div>
        </div>
        <div className={classes.graph}>
          <DashboardChart />
        </div>
      </div>
      <div className={classes.Transaction}>
        <Transaction />
      </div>

=======

              
                <MdNavigateNext onClick={() => setModalSendIsOpen(true)}
                className={classes.MdNavigateNext} />
             
          </div>
          </div>
        </div>
        <div className={classes.graph}>
          <DashboardChart />
        </div>
      </div>
      <div className={classes.Transaction}>
        <Transaction />
      </div>

      
    
>>>>>>> main
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        className={classes.Modal}
        overlayClassName={classes.Overlay}
      >
        <WelcomeModal />
      </Modal>

      <Modal
        isOpen={modalFundIsOpen}
        onRequestClose={() => {
          setModalFundIsOpen(false);
        }}
        className={classes.ModalFund}
        overlayClassName={classes.OverlayFund}
      >
        <FundWallet onClick={handleClick} />
      </Modal>
<<<<<<< HEAD
=======

        <Modal
           isOpen={modalSendIsOpen}
            className={classes.ModalSend}
             overlayClassName={classes.OverlaySend}
             >
              <SendMoney onClick={handleSendClick} />
         </Modal>


>>>>>>> main
    </div>
  );
};

export default Dashboard;
