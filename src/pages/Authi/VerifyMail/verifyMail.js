import AuthLayout from "../../../layout/Auth/Auth";
import Button from "components/UI/Button/button";
import style from "../VerifyMail/verifyMail.module.css";
import { Link } from "react-router-dom";

const VerifyMail = () => {
  return (
    <AuthLayout
      title1="Lets help you make borderless Payment!"
      title2="Verify Email"
      info="Almost there! We sent an email to users@gmail.com containing your OTP. Kindly enter 6-digit OTP here"
    >
      <form>
        <div className={style.Name}>
          <div className={style.form_cont}>
            <input
              className={style.form_input}
              label="Email Address"
              type="text"
              name="FullName"
              required={true}
            />
          </div>
          <div className={style.form_cont}>
            <input
              className={style.form_input}
              label="Email Address"
              type="text"
              name="FullName"
              required={true}
            />
          </div>
          <div className={style.form_cont}>
            <input
              className={style.form_input}
              label="Email Address"
              type="text"
              name="FullName"
              required={true}
            />
          </div>
          <div className={style.form_cont}>
            <input
              className={style.form_input}
              label="Email Address"
              type="text"
              name="FullName"
              required={true}
            />
          </div>
          <div className={style.form_cont}>
            <input
              className={style.form_input}
              label="Email Address"
              type="text"
              name="FullName"
              required={true}
            />
          </div>
          <div className={style.form_cont}>
            <input
              className={style.form_input}
              label="Email Address"
              type="text"
              name="FullName"
              required={true}
            />
          </div>
        </div>

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
        <Button type="submit">Verify</Button>

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
