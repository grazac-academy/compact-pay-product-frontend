import Hero from "components/UI/Hero/hero";
import classes from "./home.module.css";
import Whyuscard from "components/UI/Whyuscard/whyuscard";
import { cardCont } from "constants";
import Card from "components/Home/Card/Card";
import Globe from "components/Home/Globe/Globe";
import Carousel from "components/Home/Carousel/Carousel";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  return (
    <>
      <section className={classes.section1}>
        <Hero />
      </section>

      <div className={classes.section2}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeInDown" animateDelay="800ms">
          <div className={classes.header}>
            <h1 className="sect-header2 set_header">Why Choose Compactpay?</h1>
          </div>
          <div className={classes.card_container}>
            {cardCont.map((item, index) => (
              <Whyuscard {...item} key={index} />
            ))}
          </div>
        </AnimationOnScroll>
      </div>

      <Card />
      <Globe />
      <Carousel />
    </>
  );
};

export default Home;
