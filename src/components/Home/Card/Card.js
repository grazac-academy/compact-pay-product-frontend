import classes from "./Card.module.css";
import iphone from "assets/Landing/productMobileImage2.svg";
import appstore from "assets/Landing/appleStore.png";
import googleplay from "assets/Landing/googlePlayButton.png";
import { works } from "constants/index";
import CardItem from "components/Home/CardItem/CardItem";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Card = () => {
  return (
    <div>
      <div className={classes.mobile}>
        <h2 className={classes.H2text}>
          Transfer money online at your own conveniency
        </h2>
        <div className={classes.iphone}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutRight"
          >
            <img src={iphone} alt="iphone" />
          </AnimationOnScroll>
        </div>
        <div className={classes.transfer}>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutLeft"
            animateDelay="1000ms"
          >
            <h2>Transfer money online at your own conveniency</h2>
            <p>
              Download our app for free to transfer money online across the
              border at your own conviniency. Track your payments and view your
              transaction history anytime and anywhere.
            </p>
            <div className={classes.applications}>
              <img src={appstore} alt="appstore" />
              <img src={googleplay} alt="googleplay" />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={classes.how}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateDelay="800ms">
          <h2>How it works</h2>
          <p>
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateDelay="800ms">
          <div className={classes.work}>
            {works.map((item) => (
              <CardItem
                key={item.id}
                img={item.img}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Card;
