import classes from "./NewBenModal.module.css";
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import Modal from "react-modal";
import { useState } from "react";
import NewBenTwo from "components/Modals/BenModals/NewBenModal/NewBenTwo";

Modal.setAppElement("#root");

const NewBenModal = ({ onClick }) => {
  const [modalIsBenOpen, setModalIsBenOpen] = useState(false);

  const handleClick = () => setModalIsBenOpen(false);

  return (
    <div>
      <div className={classes.Verification}>
        <img onClick={onClick} src={arrowleft} alt="arrowleft" />
        <h2>Create New Beneficiary</h2>
        <p>Enter receiver's bank account details to continue</p>
      </div>

      <div className={classes.BenType}>
        <h4>Beneficiary Type</h4>
        <select>
          <option hidden selected disabled>
            Select beneficiary type
          </option>
          <option>School</option>
          <option>Individual</option>
          <option>Charity</option>
          <option>Family</option>
        </select>

        <label className={classes.BenInput}>
          <h4>Email Address</h4>
          <input placeholder="Enter Email Address" />
        </label>

        <h4>Bank Name</h4>
        <select>
          <option hidden selected disabled>
            Enter Bank Name
          </option>
          <option>GTBank</option>
          <option>Providus Bank</option>
          <option>First Bank</option>
          <option>Zenith Bank</option>
        </select>

        <label className={classes.BenInput}>
          <h4>Account Number</h4>
          <input placeholder="Enter Account Number" />
        </label>

        <Button onClick={() => setModalIsBenOpen(true)}>Send</Button>
      </div>

      <Modal
        isOpen={modalIsBenOpen}
        className={classes.Modal}
        overlayClassName={classes.Overlay}
      >
        <NewBenTwo onClick={handleClick} />
      </Modal>
    </div>
  );
};

export default NewBenModal;
