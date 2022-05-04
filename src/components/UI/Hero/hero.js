import React from "react";
import classes from "./hero.module.css";


const hero = () => {
  return (
  
    <div className={classes.hero_cont}>
      <div className={classes.hero_left}>
        <h1>The Fastest And Reliable Place To Send Money</h1>
        <p className="small-text">Compactpay is a platform that offers a seamless transaction experience
        across borders, we put you first: low cost fees, speedy transactions
        locally and internationally.</p>
      </div>

       
    </div>
   
  );
};

export default hero;
