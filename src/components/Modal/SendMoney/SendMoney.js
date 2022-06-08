
import Modal from "react-modal";
import React, { useState } from "react";
import icon from "assets/Dashboard/icon.svg";
import NewBeneficiary from "assets/Dashboard/new beneficiary.svg";
import SaveBeneficiary from "assets/Dashboard/save beneficiary.svg";
import CompactpayUser from "assets/Dashboard/compactpay user.svg";
import PersonalAccount from "assets/Dashboard/personal user.svg";
import classes from "./SendMoney.module.css";
import CompactpayUsers from "../../Modal/CompactpayUsers/CompactpayUsers";
import NewBeneficiaries from "../../Modal/NewBeneficiaries/NewBeneficiaries";
import SaveBeneficiaries from "../../Modal/SaveBeneficiaries/SaveBeneficiaries";
import PersonalAccounts from "../../Modal/PersonalAccounts/PersonalAccounts";


const SendMoney = ({onClick}) => {

     const [isOpenSendMoney, setIsOpenSendMoney] = useState(false);
    const [isOpenSaveBeneficiary, setIsOpenSaveBeneficiary] = useState(false);
    const [isOpenCompactpayUser, setIsOpenCompactpayUser] = useState(false);
    const [isOpenPersonalAccount, setIsOpenPersonalAccount] = useState(false);
   
   
   
    const handleClick = () => setIsOpenSendMoney (false);
    const handleSaveClick = () => setIsOpenSaveBeneficiary (false);
    const handleUserClick = () => setIsOpenCompactpayUser (false);
    const handlePersonalClick = () => setIsOpenPersonalAccount (false);
 
  return (
    <div>
        <div className={classes.SendMoney}>
                  <div className={classes.spread}>
                    <div className={classes.money}>
                      <h2>Send Money</h2>
                      <p>Please select any option below to continue</p>
                    </div>
                    <div className={classes.icon}>
                      <img
                        src={icon}
                        alt="icon"
                        onClick={onClick}
                      />
                    </div>
                  </div>
                  <div className={classes.modalButtons}>
                    <div
                      onClick={() => setIsOpenSendMoney(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={NewBeneficiary} alt="" onClick={onClick} />
                      </div>
                      <div className={classes.save}>
                        <span>
                          <h5>New Beneficiary</h5>
                          <p>send money to a new beneficiary</p>
                        </span>
                       
                      </div>
                    </div>
                    <div
                      onClick={() => setIsOpenSaveBeneficiary(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={SaveBeneficiary} alt="" onClick={onClick} />
                      </div>
                      <div className={classes.save}>
                        <h5>Save Beneficiary</h5>
                        <p>send money to a saved beneficiary</p>
                      </div>
                     
                    </div>
                    <div
                      onClick={() => setIsOpenCompactpayUser(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={CompactpayUser} alt="" onClick={onClick} />
                      </div>
                      <div className={classes.save}>
                        <h5>Compactpay User</h5>
                        <p>send money to a compactpay user</p>
                      </div>
                      
                    </div>
                    <div
                      onClick={() => setIsOpenPersonalAccount(true)}
                      className={classes.modalB}
                    >
                      <div>
                        <img src={PersonalAccount} alt=""  onClick={onClick}/>
                      </div>
                      <div className={classes.save}>
                        <h5>Personal Account</h5>
                        <p>send money to your personal saved account</p>
                      </div>
                     
                    </div>
                  </div>
                </div>




                        <Modal
                          isOpen={isOpenSendMoney}
                          className={classes.ModalN}
                          overlayClassName={classes.OverlayN}
                        >
                          <NewBeneficiaries onClick={handleClick} />
                        </Modal>

                      <Modal
                        isOpen={isOpenSaveBeneficiary}
                        className={classes.ModalS}
                        overlayClassName={classes.OverlayS}
                      >
                        <SaveBeneficiaries  onClick={handleSaveClick}/>
                      </Modal>

                      <Modal
                        isOpen={isOpenCompactpayUser}
                        className={classes.ModalC}
                        overlayClassName={classes.OverlayC}
                      >
                       <CompactpayUsers  onClick={handleUserClick}/>
                      </Modal>

                      <Modal
                        isOpen={isOpenPersonalAccount}
                        className={classes.ModalP}
                        overlayClassName={classes.OverlayP}
                      >
                      <PersonalAccounts  onClick={handlePersonalClick}/>
                      </Modal>
    </div>
  )
}

export default SendMoney