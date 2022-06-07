import close from "assets/Dashboard/close.svg";
import copy from "assets/Dashboard/copy.svg";
import classes from "./FundWallet.module.css";
import Button from "components/UI/Button/button";





const FundWallet = ({onClick}) => {
  return (
    <div>
                <div className={classes.Verification}>
                <div className={classes.close}>
                    <img onClick={onClick} src={close} alt="close"/>
                </div>
                <h2>Fund your Wallet</h2>
                <p>Please select any option below to continue</p>
                </div>

                <div className={classes.bank}>
                      <h3>Bank: WEMA BANK</h3>
                      <div className={classes.bank_acc}>
                            <img src={copy} alt="copy"/>
                            <span>0121260845</span>
                      </div>
                      <p>This works like a regular bank account number. Transfer from any source to 0121260845. Select COMPACTPAY as the destination bank. Funds will be credited to your Flex Account instantly.</p>
                     
                      <Button onClick={onClick}>Okay</Button>

                </div>


    </div>
  )
}

export default FundWallet