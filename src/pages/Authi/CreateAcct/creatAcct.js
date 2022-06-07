<<<<<<< HEAD
=======
import AuthLayout from "layout/Auth/Auth";
>>>>>>> main
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "./creatAcct.module.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { useFormik } from "formik";
import * as Yup from "yup";
import {CreateAccount} from "services/auth";
import {useNavigate} from 'react-router-dom';

const CreateAcct = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string().required("Please enter your last name"),
      email: Yup.string()
        .required("Please enter your email")
        .email("Please enter a valid email"),
      phoneNumber: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required("Please enter your phone number"),
      password: Yup.string().required(
        "Password must have at least 8 character, 1 number & a special character"
      ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), ""],
        "Passwords does not match"
      ),
    }),


  });

  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    navigate('/dashboard/home')
    const response = await CreateAccount
    console.log("dare");
    try{

    }
    catch{

    }
  }

  return (
    <AuthLayout
      title1="Lets help you make borderless Payment!"
      title2="Create Account"
      info="Enter your details to create an account ,it’s free"
    >
      <form onSubmit={handleSubmit}>
        <div className={style.Name}>
         

          <FormGroup
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.firstName && formik.errors.firstName}
          />

          <FormGroup
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.lastName && formik.errors.lastName}
          />
          
        </div>
        <FormGroup
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <FormGroup
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <FormGroup
          label="Password"
          type="password"
          placeholder="Create a password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.password && formik.errors.password}
        />
        <FormGroup
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <div className={style.forgot_sect}>
          <div className={style.forgot}>
            <p>
              By submitting this form, you’ve agree to CompactPay's
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

        <Button type="submit" 
        // disabled={!formik.isValid}
        >
          Create Account
        </Button>

        <div className={style.new_account}>
          <p>
            New to Compactpay?
            <Link to="/signin">
              {" "}
              <span>Sign in</span>
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
>>>>>>> main
  );
};

export default CreateAcct;
