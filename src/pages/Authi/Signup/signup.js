import Button from "components/UI/Button/button";
import style from "./signup.module.css";
import { Link } from "react-router-dom";

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
          <option value="Choose your country" hidden selected disabled>
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
  );
};

export default Signup;
