import classes from "./Dashboard.module.css";
import addfund from "assets/Dashboard/addfund.svg";
import sendmoney from "assets/Dashboard/sendmoney.svg";
import { MdNavigateNext } from "react-icons/md";
import DashboardChart from "components/DashboardPage/DashboardChart/DashboardChart";
import Transaction from "components/DashboardPage/Transaction/Transaction";
import Button from "components/UI/Button/button";
 import SendMoney from "components/Modal/SendMoney/SendMoney";
import Modal from "react-modal";
import React, { useState } from "react";
// import icon from "assets/Dashboard/icon.svg";
// import NewBeneficiary from "assets/Dashboard/new beneficiary.svg";
// import SaveBeneficiary from "assets/Dashboard/save beneficiary.svg";
// import CompactpayUser from "assets/Dashboard/compactpay user.svg";
// import PersonalAccount from "assets/Dashboard/personal user.svg";

const Dashboard = ( ) => {
  
   const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpenSaveBeneficiary, setIsOpenSaveBeneficiary] = useState(false);
  // const [isOpenCompactpayUser, setIsOpenCompactpayUser] = useState(false);
  // const [isOpenPersonalAccount, setIsOpenPersonalAccount] = useState(false);

  
 const handleClick = () => setModalIsOpen(false);
  return (
    // <DashboardLayout>
    <div className={classes.dashInfo}>
      <div className={classes.wallet}>
        <div className={classes.wallet_contain}>
          <h4>Wallet information</h4>
          <div className={classes.Money}>
            <div className={classes.Naira}>
              <p>Naira Wallet</p>
              <h5>Wallet Balance</h5>
              <h2>₦ 100,390,000</h2>
              <Button>
                <img src={addfund} alt="" />
                <span>Fund Wallet</span>
              </Button>
            </div>
            <div className={classes.Send}>
              <img src={sendmoney} alt="" />
              <h3>Send Money</h3>
              <p>Access seamless crossborder payment</p>

              <button
                onClick={() => setModalIsOpen(true)}
                className={classes.MdNavigateNext}
              >
                <MdNavigateNext />
              </button>
              <Modal
                isOpen={modalIsOpen}
                className={classes.Modal}
                overlayClassName={classes.Overlay}
              >
                  <SendMoney onClick={handleClick} />
              </Modal>
                {/* <div className={classes.SendMoney}>
                  <div className={classes.spread}>
                    <div className={classes.money}>
                      <h2>Send Money</h2>
                      <p>Please select any option below to continue</p>
                    </div>
                    <div className={classes.icon}>
                      <img
                        src={icon}
                        alt="icon"
                        onClick={() => setModalIsOpen(false)}
                      />
                    </div>
                  </div>
                  <div className={classes.modalButtons}>
                    <div
                      onClick={() => setIsOpen(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={NewBeneficiary} alt="" />
                      </div>
                      <div className={classes.save}>
                        <span>
                          <h5>New Beneficiary</h5>
                          <p>send money to a new beneficiary</p>
                        </span>
                        <Modal
                          isOpen={isOpen}
                          className={classes.ModalN}
                          overlayClassName={classes.OverlayN}
                        >
                          <SendMoney onClick={handleClick}/>
                        </Modal>
                      </div>
                    </div>
                    <div
                      onClick={() => setIsOpenSaveBeneficiary(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={SaveBeneficiary} alt="" />
                      </div>
                      <div className={classes.save}>
                        <h5>Save Beneficiary</h5>
                        <p>send money to a saved beneficiary</p>
                      </div>
                      <Modal
                        isOpen={isOpenSaveBeneficiary}
                        className={classes.ModalS}
                        overlayClassName={classes.OverlayS}
                      >
                        bread
                      </Modal>
                    </div>
                    <div
                      onClick={() => setIsOpenCompactpayUser(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={CompactpayUser} alt="" />
                      </div>
                      <div className={classes.save}>
                        <h5>Compactpay User</h5>
                        <p>send money to a compactpay user</p>
                      </div>
                      <Modal
                        isOpen={isOpenCompactpayUser}
                        className={classes.ModalC}
                        overlayClassName={classes.OverlayC}
                      >
                        bread
                      </Modal>
                    </div>
                    <div
                      onClick={() => setIsOpenPersonalAccount(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={PersonalAccount} alt="" />
                      </div>
                      <div className={classes.save}>
                        <h5>Personal Account</h5>
                        <p>send money to your personal saved account</p>
                      </div>
                      <Modal
                        isOpen={isOpenPersonalAccount}
                        className={classes.ModalP}
                        overlayClassName={classes.OverlayP}
                      >
                        bread
                      </Modal>
                    </div>
                  </div>
                </div> */}
               
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
    </div>
    // </DashboardLayout>
  );
};

export default Dashboard;
