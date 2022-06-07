import AuthLayout from "layout/Auth/Auth";
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "./signin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import {useNavigate} from 'react-router-dom';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate('/dashboard/home')
};



  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout
      title1="Send Money Seamlessly!"
      title2="Welcome Back"
      info="Enter your details to login to your account."
    >
      <form onSubmit={handleSubmit}> 
        <FormGroup
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          name="FullName"
          required={true}
        />

        <div className={style.form_contain}>
          <label className={style.form_label}>Password</label>
          <div className={style.password}>
            <input
              className={style.form_input}
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              name="password"
              required={true}
            />
            <div className={style.btn} onClick={toggleBtn}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
        </div>

        <div className={style.forgot_sect}>
          <div className={style.check}>
            <input type="checkbox" />
            <label for="keep Me"> Keep me signed in</label>
          </div>
          <div className={style.forgot}>
            <p>
              <Link to="/forgotpassword">
                <span>Forgot your password?</span>
              </Link>
            </p>
          </div>
        </div>

        <Button type="submit" >Log in</Button>
        {/* onClick={()=>setModalIsOpen(true)} */}
        </form> 
    

        <div className={style.new_account}>
          <p>
            New to Compactpay?{" "}
            <Link to="/signup">
              {" "}
              <span>Create Account</span>
            </Link>
          </p>
        </div>

    </AuthLayout>
  );
};

export default Signin; 