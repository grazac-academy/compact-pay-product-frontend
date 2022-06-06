import successBVN from "assets/Dashboard/bvnsucessful.svg"
import Button from "components/UI/Button/button";
import classes from "./SuccessTwo.module.css";
import { Link } from "react-router-dom";



const SuccessTwo = () => {
  return (
    
    <div className={classes.Success}>
        <div className={classes.Success_img}>
        <img src={successBVN} alt="successBVN" />
        </div>
        <h2>Great, information submitted</h2>
        <Link to="/dashboard">
        <Button >Go Back Home</Button>
        </Link>

    </div>
  )
}

export default SuccessTwo