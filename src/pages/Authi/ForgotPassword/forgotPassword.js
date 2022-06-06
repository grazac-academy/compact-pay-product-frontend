import AuthLayout from "layout/Auth/Auth";
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "./forgotPassword.module.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <AuthLayout
      title1="Reset Password Easily"
      title2="Forgot Password?"
      info="Enter the email address you used to register your CompactPay."
    >
      <form>
        <FormGroup
          label="Email Address"
          type="text"
          placeholder="Enter your email address"
          name="FullName"
          required={true}
        />

        <Button type="submit">Send</Button>

        <div className={style.new_account}>
          <p>
            Already have an Account?{" "}
            <Link to="/signin">
              <span>Sign in</span>
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
