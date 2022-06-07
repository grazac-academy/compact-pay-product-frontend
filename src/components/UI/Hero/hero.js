import React from "react";
import Converter from 'layout/Converter/Converter';
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_cont}>
      <div className={classes.hero_left}>
<<<<<<< HEAD
        <h1 onClick={(e) => console.log(e)}>
          The Fastest And Reliable Place To Send Money
        </h1>
=======
        <h1>The Fastest And Reliable Place To Send Money</h1>
>>>>>>> main
        <p className="small-text .small-text2">
          Compactpay is a platform that offers a seamless transaction experience
          across borders, we put you first: low cost fees, speedy transactions
          locally and internationally.
        </p>
      </div>
<<<<<<< HEAD
=======
      <div className={classes.hero_right}><Converter /></div>
>>>>>>> main
    </div>
  );
};

export default Hero;
