import AuthLayout from "../../../layout/Auth/Auth";
import Button from "components/UI/Button/button";
import style from "../VerifyMail/verifyMail.module.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
import { verify } from "services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const VerifyMail = () => {
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
    console.log(data);
    try {
      const response = await verify(localStorage.getItem("id"), code);
      console.log(response);
    navigate('/signin');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

=======

const VerifyMail = () => {
>>>>>>> main
  return (
    <AuthLayout
      title1="Lets help you make borderless Payment!"
      title2="Verify Email"
      info="Almost there! We sent an email to users@gmail.com containing your OTP. Kindly enter 6-digit OTP here"
    >
      <form>
<<<<<<< HEAD
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
=======
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
>>>>>>> main
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
<<<<<<< HEAD
        <Button type="submit" onClick={handleSubmit}>Verify</Button>
=======
        <Button type="submit">Verify</Button>
>>>>>>> main

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
