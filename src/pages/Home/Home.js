import React from 'react'
import Header2 from "../../components/UI/Header/Header2/header2"
import Hero from "../../components/UI/Hero/hero"
import classes from "./home.module.css"
import Card from "../../components/UI/Whyuscard/whyuscard"
import {cardCont} from '../../constants'

const Home = () => {
  return (
      <>
    <section className={classes.section1}>
        <Header2 />
        <Hero />
    </section>
    
    <div className={classes.section2}>
        <div className={classes.header}>
            <h1 className="sect-header2 set_header">Why Choose Compactpay?</h1>
        </div>
        <div className={classes.card_container}>
            {cardCont.map((item, index) => (
                <Card {...item} key={index} />
            ))}
        </div>
    </div>
    </>
   

  )
}

export default Home;