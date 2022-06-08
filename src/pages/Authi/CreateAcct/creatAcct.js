import AuthLayout from "layout/Auth/Auth";
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "./creatAcct.module.css";
import { Link } from "react-router-dom";
import { createAccount } from "services/auth";
import PhoneInput from "react-phone-number-input";
import { checkMail, checkPassword } from "utils/regex";
import { inputArr } from "constants/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateAcct = ({ payload, setPayload }) => {
  console.log(inputArr);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);

    try {
      setLoading(true);
      const response = await createAccount(payload);
      localStorage.setItem("id", response.data._id);
      navigate("/verifyMail");
      console.log(response.data._id);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputArr.slice(0, 3).map((item, idx) => (
        <FormGroup
          key={idx}
          onChange={(e) => handleChange(e)}
          value={payload[item.name]}
          isValid={() => item.validator(payload)}
          {...item}
        />
      ))}
      <div className={`${style.phoneNumber}`}>
        Phone Number
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="NG"
          value={payload.phoneNumber}
          onChange={(e) =>
            setPayload((prevState) => ({
              ...prevState,
              phoneNumber: e,
            }))
          }
        />
      </div>
      {inputArr.slice(3).map((item, idx) => (
        <FormGroup
          key={idx}
          onChange={(e) => handleChange(e)}
          value={payload[item.name]}
          isValid={item.validator(payload)}
          {...item}
        />
      ))}
      <div className={style.forgot_sect}>
        <div className={style.forgot}>
          <p>
            By submitting this form, you've agree to CompactPay's
            <Link to="">
              <span> Terms and Conditions</span>
            </Link>
            and
            <Link to="">
              <span> Privacy Policy.</span>
            </Link>
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={
          payload.firstName.length < 3 ||
          payload.lastName.length < 3 ||
          !checkMail(payload.email) ||
          !payload.phoneNumber ||
          payload.phoneNumber?.length < 14 ||
          checkPassword(payload.password) ||
          payload.password !== payload.confirmPassword
        }
      >
        {loading ? "is Loading" : "Create Account"}
      </Button>

      <div className={style.new_account}>
        <p>
          New to Compactpay?
          <Link to="/signin">
            <span>Sign in</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default CreateAcct;
