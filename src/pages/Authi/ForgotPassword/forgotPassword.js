import AuthLayout from "layout/Auth/Auth";
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "./forgotPassword.module.css";
import { forgotPassword } from "services/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "components/UI/Loading/loading";

const ForgotPassword = () => {
  const [payload, setPayload] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await forgotPassword(payload);
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
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
          name="Email"
          required={true}
        />

<Button type="submit" onClick={handleSubmit}>
          {loading ? <Loading /> : "Send"}
        </Button>

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
