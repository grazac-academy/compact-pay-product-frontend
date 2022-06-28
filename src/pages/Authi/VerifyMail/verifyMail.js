import AuthLayout from "layout/Auth/Auth";
import Button from "components/UI/Button/button";
import style from "pages/Authi/VerifyMail/verifyMail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { verify } from "services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "components/UI/Loading/loading";
import OtpInput from "react-otp-input";

const VerifyMail = () => {
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await verify(otp, email);
      console.log(response);
      toast.success(response.data.message);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <AuthLayout
      title1="Lets help you make borderless Payment!"
      title2="Verify Email"
      info="Almost there! We sent an email to users@gmail.com containing your OTP. Kindly enter 6-digit OTP here"
    >
      <form>
        <OtpInput
          value={otp}
          name="otp"
          onChange={handleChange}
          numInputs={6}
          containerStyle={style.grid}
          inputStyle={style.Input_cont}
        />

        <div className={style.forgot_sect}>
          <div className={style.forgot}>
            <p>
              By submitting this form, you’ve agree to CompactPay's
              <Link to="/forgotpassword">
                <span> Terms and Conditions</span>
              </Link>
              and
              <Link to="/forgotpassword">
                <span> Privacy Policy.</span>
              </Link>
            </p>
          </div>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          {loading ? <Loading /> : "Verify"}
        </Button>

        <div className={style.new_account}>
          <p>
            Didn’t get mail?
            <Link to="/signin">
              <span>Resend</span>
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default VerifyMail;
