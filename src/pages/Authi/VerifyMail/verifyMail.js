import AuthLayout from "../../../layout/Auth/Auth";
import Button from "components/UI/Button/button";
import style from "../VerifyMail/verifyMail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { verify } from "services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "components/UI/Loading/loading";

const VerifyMail = () => {
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
  });

  const navigate = useNavigate();

  const code = `${data.field1}${data.field2}${data.field3}${data.field4}${data.field5}${data.field6}`;

  const arr = [
    { name: "field1" },
    { name: "field2" },
    { name: "field3" },
    { name: "field4" },
    { name: "field5" },
    { name: "field6" },
  ];

  let tabChange = (num) => {
    let nodeList = document.querySelectorAll("input");
    if (nodeList[num].value !== "") {
      if (num < 5) nodeList[num + 1].focus();
    } else if (nodeList[num].value === "") {
      if (num > 0) {
        nodeList[num - 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await verify(code, email);
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
        <div className={`${style.grid}`}>
          {arr.map((item, index) => (
            <input
              key={index}
              type="text"
              className="t-16"
              maxLength="1"
              value={data[item.name]}
              onKeyUp={() => tabChange(index)}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  [item.name]: e.target.value,
                }))
              }
            />
          ))}
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
