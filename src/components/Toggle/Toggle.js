import React from 'react'
import classes from "./Toggle.module.css";




const Toggle = ({onChange}) => {
  return (
    <div className={classes.wrapper}>
             <label className={classes.wrapperCheckbox}>
           <input type="checkbox" onChange={onChange} className={classes.wrapperInput} />
            <span className={classes.wrapperslider}/>
           </label>
       </div>
  )
}

export default Toggle

