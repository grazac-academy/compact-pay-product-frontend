import classes from "./VerifyPhone.module.css";
import Button from "components/UI/Button/button";
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import otpin from "assets/Dashboard/otp.svg";
import Modal from "react-modal";
import { useState } from "react";
import Bvn from "components/Modals/BVNModals/BVN/Bvn";
import OtpInput from "react-otp-input";

const VerifyPhone = ({ onClick }) => {
  const [otp, setOtp] = useState("");

  const [modalIsBvnOpen, setModalIsBvnOpen] = useState(false);

  const handleClick = () => setModalIsBvnOpen(false);

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <div>
      <div className={classes.Verification}>
        <img onClick={onClick} src={arrowleft} alt="arrowleft" />
        <h2>Verify Phone Number</h2>
        <p>Please provide 6- digit OTP Sent to your registered Phone Number.</p>
      </div>

      <div className={classes.verify}>
        <div className={classes.verify_img}>
          <img src={otpin} alt="otp" />
        </div>

        <OtpInput
          value={otp}
          name="otp"
          onChange={handleChange}
          numInputs={6}
          containerStyle={classes.grid}
          inputStyle={classes.Input_cont}
        />

        <Button onClick={() => setModalIsBvnOpen(true)}>Proceed</Button>
      </div>

      <Modal
        isOpen={modalIsBvnOpen}
        className={classes.Modal}
        overlayClassName={classes.Overlay}
      >
        <Bvn onClick={handleClick} />
      </Modal>
    </div>
  );
};

export default VerifyPhone;
