import successBVN from "assets/Dashboard/bvnsucessful.svg"
import Button from "components/UI/Button/button";
import classes from "./SuccessAcc.module.css";
import { Link } from "react-router-dom";


const SuccessAcc = () => {
    
  return (
    <div className={classes.Success}>

        <div className={classes.Success_img}>
        <img src={successBVN} alt="successBVN" />
        </div>
        <h2>Personal Account Added Successfully</h2>
        <Link to="/dashboard/home">
        <Button >Okay, Thanks</Button>
        </Link>

    </div>
  )
}

export default SuccessAcc