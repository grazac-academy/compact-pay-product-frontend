import classes from "./FilledReceiversDetails.module.css";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import Modal from "react-modal";
import React, { useState } from "react";
import ConfirmTransaction from "../ConfirmTransaction/ConfirmTransaction";

const FilledReceiversDetails = ({ onClick }) => {
  const [isOpenFilledReceiversDetails, setIsOpenFilledReceiversDetails] =
    useState(false);

  const handleClick = () => setIsOpenFilledReceiversDetails(false);
  return (
    <div>
      <div className={classes.ReceiversDetails}>
        <div className={classes.RD}>
          <div className={classes.leftarrow}>
            <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
          </div>
          <div className={classes.Rdetails}>
            <h2>Receiver’s Details</h2>
            <p>Enter receiver’s bank account details to continue</p>
          </div>
        </div>
        <form className={classes.form}>
          <div className={classes.formF}>
            <label>Beneficiary Type</label>
            <select className={classes.selected}>
              <option disabled selected hidden>
                Select beneficiary type
              </option>
              <option>Individual</option>
              <option>Cooperate</option>
            </select>
          </div>
          <div className={classes.formF}>
            <label>Email Address</label>
            <input type="email" placeholder="Enter Email Address"></input>
          </div>

          <div className={classes.formF}>
            <label>Bank Name</label>
            <select className={classes.selected}>
              <option disabled selected hidden>
                Enter Bank Name
              </option>
              <option> Providus Bank</option>
              <option>GTB</option>
              <option>UBA</option>
              <option>First Bank</option>
              <option>Polaris Bank</option>
              <option>Union Bank</option>
            </select>
          </div>
          <div className={classes.formF}>
            <label>Account Number</label>
            <input
              className={classes.exchange}
              placeholder="Enter Account Number"
            ></input>
          </div>
          <div className={classes.formF}>
            <label>Account Name</label>
            <input className={classes.AC}></input>
          </div>
        </form>
        <div className={classes.buttonF}>
          <button
            onClick={() => setIsOpenFilledReceiversDetails(true)}
            className={classes.button}
          >
            Proceed
          </button>
          <Modal
            isOpen={isOpenFilledReceiversDetails}
            className={classes.ModalP}
            overlayClassName={classes.OverlayP}
          >
            <ConfirmTransaction onClick={handleClick} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default FilledReceiversDetails;
