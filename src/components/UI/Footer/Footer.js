<<<<<<< HEAD
import compactLogo from "assets/Landing/Logo.svg";
=======
import compactLogo from "assets/Landing/Logowhite.svg";
>>>>>>> main
import facebook from "assets/Landing/facebook.svg";
import twitter from "assets/Landing/twitter.svg";
import instagram from "assets/Landing/instagram.svg";
import youtube from "assets/Landing/youtube.svg";
import linkedin from "assets/Landing/linkedin.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.foot}>
        <div className={classes.footer_logo}>
          <div>
            <img src={compactLogo} alt="compactLogo" />
          </div>
          <h5>
            Address: <span>udgyduuyvsvvcuvvs,nbhbcdjncbbhcb</span>
          </h5>
          <h5>
            Phone: <span> +234 812 345 7569 , +01 564 545 3567 </span>
          </h5>
          <h5>
            Email: <span>compactpay@mail.com</span>
          </h5>
          <div className={classes.footimage}>
            <img src={facebook} alt="compactLogo" />
            <img src={twitter} alt="compactLogo" />
            <img src={instagram} alt="compactLogo" />
            <img src={youtube} alt="compactLogo" />
            <img src={linkedin} alt="compactLogo" />
          </div>
        </div>
        <div className={classes.footer_info}>
          <div>
            <h3>INFORMATION</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h3>MY ACCOUNT</h3>
            <p>My Account</p>
            <p>Send Money</p>
            <p>Track Transaction</p>
            <p>Help Desk</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
