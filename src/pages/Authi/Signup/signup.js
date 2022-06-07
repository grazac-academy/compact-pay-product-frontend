<<<<<<< HEAD
=======
import AuthLayout from "layout/Auth/Auth";
>>>>>>> main
import Button from "components/UI/Button/button";
import style from "./signup.module.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const Signup = ({ payload, setPayload, setActive }) => {
  return (
    <form>
      <div>
        <select
          className={style.custom_select}
          defaultValue={payload.country}
          onChange={(e) =>
            setPayload((prevState) => ({
              ...prevState,
              country: e.target.value,
            }))
          }
        >
          <option value="Choose your country" disabled>
            Choose your country:
          </option>
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="South Africa">South Africa</option>
          <option value="Kenya">Kenya</option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={payload.country === "Choose your country"}
        onClick={() => setActive(false)}
      >
        Get Started
      </Button>

      <div className={style.new_account2}>
        <p>
          Already have an Account?
          <Link to="/signin">
            <span> Sign in</span>
          </Link>
        </p>
      </div>
    </form>
=======
const Signup = () => {
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

        <Link to="/createAcct">
          <Button type="submit">Get Started</Button>
        </Link>

        <div className={style.new_account2}>
          <p>
            Already have an Account?{" "}
            <Link to="/signin">
              <span>Sign in</span>
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
>>>>>>> main
  );
};

export default Signup;
