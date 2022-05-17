import AuthLayout from "../../../layout/Auth/Auth";
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "../CreateAcct/creatAcct.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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
      email: Yup.string().required("Please enter your email").email("Please enter a valid email"),
      phoneNumber: Yup.number().typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8).required("Please enter your phone number"),
      password: Yup.string().required("Password must have at least 8 character, 1 number & a special character"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""], "Passwords does not match")
    }),

    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    }
  });


  return (
    <AuthLayout
      title1="Lets help you make borderless Payment!"
      title2="Create Account"
      info="Enter your details to create an account ,it’s free"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className={style.Name}>
          <div className={style.form_cont}>
            <label className={style.form_label}>First Name</label>
            <input
              className={style.form_input}
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}             
            />
            <p>{formik.touched.firstName && formik.errors.firstName}</p>
          </div>
          <div className={style.form_cont}>
            <label className={style.form_label}>Last Name</label>
            <input
              className={style.form_input}
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            <p>{formik.touched.lastName && formik.errors.lastName}</p>
          </div>
        </div>
        <FormGroup
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          errorMessage = {formik.touched.email && formik.errors.email}
        />
        <FormGroup
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          errorMessage = {formik.touched.phoneNumber && formik.errors.phoneNumber}
        />

        <div className={style.form_contain}>
          <label className={style.form_label}>Password</label>
          <div className={style.password}>
            <input
              className={style.form_input}
              type= "password"
              placeholder="Create a password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </div>
          <p>{formik.touched.password && formik.errors.password}</p>
        </div>

        <div className={style.form_contain}>
          <label className={style.form_label}>Confirm Password</label>
          <div className={style.password}>
            <input
              className={style.form_input}
              type= "password"
              placeholder="Create a password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}             
            />     
          </div>
          <p>{formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
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
       
          <Button type="submit">Create Account</Button>
     

        <div className={style.new_account}>
          <p>
            New to Compactpay?
            <Link to="/signin">
              <span>Sign in</span>
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default CreateAcct;
