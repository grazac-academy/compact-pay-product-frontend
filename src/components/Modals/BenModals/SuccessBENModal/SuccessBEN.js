import successBVN from "assets/Dashboard/bvnsucessful.svg"
import Button from "components/UI/Button/button";
import classes from "./SuccessBEN.module.css";
import { Link } from "react-router-dom";


const SuccessBEN = () => {
    
  return (
    <div className={classes.Success}>

        <div className={classes.Success_img}>
        <img src={successBVN} alt="successBVN" />
        </div>
        <h2>Beneficiary Added Successfully</h2>
        <Link to="/dashboard/home">
        <Button >Okay, Thanks</Button>
        </Link>

    </div>
  )
}

export default SuccessBEN