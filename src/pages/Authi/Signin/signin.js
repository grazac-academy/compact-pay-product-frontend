import AuthLayout from "layout/Auth/Auth";
import Button from "components/UI/Button/button";
import FormGroup from "components/UI/FormGroup/formgroup";
import style from "./signin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { login } from "services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

//   const navigate = useNavigate();
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     navigate('/dashboard/home')
// };



  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      setLoading(true);
      const response = await login(data);
      localStorage.setItem("id", response.data._id);
      console.log(response.data);
      navigate("/modal");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
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
          name="email"
          required={true}
          onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
        <Button type="submit" onClick={handleSubmit}>
          Log in
        </Button>

        <div className={style.new_account}>
          <p>
            New to Compactpay?{" "}
            <Link to="/register">
              {" "}
              <span>Create Account</span>
            </Link>
          </p>
        </div>
      </form>

    </AuthLayout>
  );
};

export default Signin; 