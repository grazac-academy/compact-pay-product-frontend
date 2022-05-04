import React from 'react'
import classes from "./whyuscard.module.css"



const whyuscard = ({ image, title, content }) => {
  return (
    <div className={classes.card_container}>
    <div className={classes.card}>
    <div className={classes.image}>
        <img src={image} alt="" />
    </div>
    <div className={classes.text}>
        <h3>{title}</h3>
        <p>{content}</p>
     </div>
</div>
</div>
  )
}

export default whyuscard