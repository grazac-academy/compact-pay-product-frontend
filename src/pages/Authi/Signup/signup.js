import AuthLayout from "../../../layout/Auth/Auth";
import Button from "components/UI/Button/button";
import style from "../Signup/signup.module.css";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <AuthLayout
      title1="Lets help you make borderless Payment! !"
      title2="Get Started"
      info="Get started here."
    >
      <form>
<div>
  <select class={style.custom_select}>
    <option value="0">Choose your country:</option>
    <option value="1">Nigeria</option>
    <option value="2">Ghana</option>
    <option value="3">United Kingdom</option>
    <option value="4">United States</option>
    <option value="5">South Africa</option>
    <option value="6">Kenya</option>
  </select>
</div>

        <Link to="/createAcct"><Button type="submit">Get Started</Button></Link>

        <div className={style.new_account2}>
          <p>Already have an Account?  <Link to="/signin"><span>Sign in</span></Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default signup;
