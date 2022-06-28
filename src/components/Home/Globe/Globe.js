import React from "react";
import classes from "./Globe.module.css";
import Logo from "assets/Landing/world.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Globe() {
  return (
    <div className={classes.full5}>
      <div className={classes.container}>
        <h4>Millions of international transactions around the globe </h4>
        <div className={classes.section5}>
        <AnimationOnScroll animateIn="animate__fadeInLeft"  animateDelay="800ms">
          <div className={classes.section5a}>
            <div className={classes.section5a1}>
              <div className={classes.section5a3}>
                <div className={classes.section5a2}></div>
                <h4>150+</h4>
                <p>We operates in over 150+ countries and regions</p>
              </div>

              <div className={classes.section5a31}>
                <div className={classes.section5a21}></div>
                <h4>2M+</h4>
                <p>We have over 2M+ trusted users worldwide</p>
              </div>

              <div className={classes.section5a32}>
                <div className={classes.section5a22}></div>
                <h4>50</h4>
                <p>We complete over 50 transactions per seconds</p>
              </div>
            </div>
          </div>
          </AnimationOnScroll>
          <div className={classes.world}>
            <img src={Logo} alt="world" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Globe;
