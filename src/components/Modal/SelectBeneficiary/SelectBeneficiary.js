import classes from "./SelectBeneficiary.module.css";
import Leftarrow from "assets/Dashboard/Arrow - Left.svg";
import UBA from "assets/Dashboard/Uba logo.svg";
import GTB from "assets/Dashboard/gtb logo.svg";
import Wema from "assets/Dashboard/wemalogo.svg";
import greaterthan from "assets/Dashboard/greaterthan.svg";
import search from "assets/Dashboard/search.svg";
import Modal from "react-modal";
import React, { useState } from "react";
import ConfirmTransaction from "../../Modal/ConfirmTransaction/ConfirmTransaction";

const SelectBeneficiary = ({ onClick }) => {
  const [isOpenSelectBeneficiary, setIsOpenSelectBeneficiary] = useState(false);

  const handleClick = () => setIsOpenSelectBeneficiary(false);

  return (
    <div>
      <div className={classes.ReceiversDetails}>
        <div className={classes.RD}>
          <div className={classes.leftarrow}>
            <img src={Leftarrow} alt="leftarrow" onClick={onClick} />
          </div>
          <div className={classes.Rdetails}>
            <h2>Select Beneficiary</h2>
            <p>Enter receiver’s bank account details to continue</p>
          </div>
        </div>
        <div className={classes.form}>
          <label className={classes.view}>
            <img src={search} alt="search" />
            <input type="text" placeholder="Search Beneficiary" />
          </label>
          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={UBA} alt="UBA LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>UBA - 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>

          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={UBA} alt="UBA LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>UBA - 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={GTB} alt="gtb LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>GTBank - 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={Wema} alt="wemabank LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>wemabank - 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={UBA} alt="UBA LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>UBA - 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={GTB} alt="gtb LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>GTBank - 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.logo}>
              <img src={GTB} alt="gtb LOGO" />
              <div className={classes.text}>
                <h4>Adebisi Oyeniya</h4>
                <p>GTBank- 023482949</p>
              </div>
            </div>
            <div>
              <img
                src={greaterthan}
                alt="greaterthan"
                onClick={() => setIsOpenSelectBeneficiary(true)}
                className={classes.next}
              />
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpenSelectBeneficiary}
          className={classes.ModalP}
          overlayClassName={classes.OverlayP}
        >
          <ConfirmTransaction onClick={handleClick} />
        </Modal>
      </div>
    </div>
  );
};

export default SelectBeneficiary;
