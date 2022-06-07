import style from "./Auth.module.css";
import phoneCoin from "assets/Auths/coinPhone.png";
import Logo from "assets/Auths/logo.svg";
import Arrow from "assets/Auths/arrowBack.svg";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";

const AuthLayout = ({ children, title1, title2, info }) => {
  let navigate = useNavigate();
=======
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title1, title2, info }) => {
>>>>>>> main
  return (
    <div className={style.auth}>
      <div className={style.auth_container}>
        <div className={style.auth_left}>
          <div className={style.auth_left_inner}>
            <h1>{title1}</h1>
            <div className={style.left_img}>
<<<<<<< HEAD
              <img src={phoneCoin} alt="" />
=======
              {" "}
              <img src={phoneCoin} alt="" />{" "}
>>>>>>> main
            </div>
          </div>
        </div>

        <div className={style.auth_right}>
          <div className={style.auth_right_inner}>
            <div>
              <Link to="/" className={style.logo_form}>
<<<<<<< HEAD
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div>
              <img src={Arrow} alt="" onClick={() => navigate(-1)} className={style.arrow_form} />
=======
                {" "}
                <img src={Logo} alt="" />{" "}
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/" className={style.arrow_form}>
                {" "}
                <img src={Arrow} alt="" />{" "}
              </Link>
>>>>>>> main
            </div>
            <div className={style.heading}>
              <h1>{title2}</h1>
              <p>{info}</p>
            </div>
            <div className={style.form}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
