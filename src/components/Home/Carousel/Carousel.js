import Logo from 'assets/Landing/stars.svg';
import Logo1 from 'assets/Landing/half star.svg';
import Logo2 from 'assets/Landing/no star.svg';
import Logo3 from 'assets/Landing/smithMorgan.svg';
import Logo4 from 'assets/Landing/smithmorgan 5.svg';
import Logo5 from 'assets/Landing/smithMorgan2.svg';
import Logo6 from 'assets/Landing/smithMorgan3.svg';
import Logo7 from 'assets/Landing/smithMorgan4.svg';
import Logo8 from 'assets/Landing/germany flag.svg';
import Logo9 from 'assets/Landing/nigerMap.svg';
import './Carousel.module.css';
import React, { Component, useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import classes from './Carousel.module.css';

const Carousel = () => {
  const [nav, setNav] = useState({
    nav1: null,
    nav2: null,
  });

  let slider1 = useRef(null);
  let slider2 = useRef(null);

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2,
    });
  }, []);

  return (
    <div className={classes.carousel}>
      <div className={classes.ratings}>
        <div className={classes.review}>
          {' '}
          <p>24,465 Reviews</p>
        </div>
        <div className={classes.bar}></div>
        <div className={classes.star_section}>
          <div className={classes.stars}>
            <img src={Logo} alt="star" />
            <img src={Logo} alt="star" />
            <img src={Logo} alt="star" />
            <img src={Logo1} alt=" half star" />
            <img src={Logo2} alt=" no star" />
          </div>
          <div className={classes.dot}>
            {' '}
            <p>3.5</p>
          </div>
        </div>
      </div>
      <Slider
        className={classes.slider1}
        slidesToShow={5}
        swipeToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true}
        speed={500}
        asNavFor={nav.nav2}
        ref={(slider) => (slider1 = slider)}
        centerPadding="50px"
        infinite={true}
      >
        <div className={classes.images}>
          <img src={Logo3} alt="smithMorgan" />
          <h3>Smith Morgan</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo4} alt="smithMorgan" />
          <h3>Desire Gold</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo5} alt="smithMorgan" />
          <h3>Adekunle Awotipe</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo6} alt="smithMorgan" />
          <h3>Victor Eneh</h3>
        </div>

        <div className={classes.images}>
          <img src={Logo7} alt="smithMorgan" />

          <h3>Modupe Adelabu</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo3} alt="smithMorgan" />
          <h3>Smith Morgan</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo4} alt="smithMorgan" />
          <h3>Desire Gold</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo5} alt="smithMorgan" />
          <h3>Adekunle Awotipe</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo6} alt="smithMorgan" />
          <h3>Victor Eneh</h3>
        </div>
        <div className={classes.images}>
          <img src={Logo7} alt="smithMorgan" />

          <h3>Modupe Adelabu</h3>
        </div>
      </Slider>

      <Slider
        className={classes.slider}
        asNavFor={nav.nav1}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={1}
        swipeToSlide={false}
        focusOnSelect={true}
      >
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo8} alt="germany flag" />
            <p className={classes.week}> 1hour ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. V
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo8} alt="germany flag" />
            <p className={classes.week}> 1 weeek ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit offic
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <div>
              <img src={Logo8} alt="germany flag" />
            </div>
            <p className={classes.week}> 7days ago</p>
          </div>
          <p>
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo9} alt="nigeria flag" />
            <p className={classes.week}> 3days ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitati
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo9} alt="germany flag" />
            <p className={classes.weeek}> 1 weeek ago</p>
          </div>
          <p>Amet minim mollit non de</p>
        </div>

        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo8} alt="germany flag" />
            <p className={classes.week}> 1hour ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo8} alt="germany flag" />
            <p className={classes.week}> 1 weeek ago</p>
          </div>
          <p>ostrud amet.</p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo8} alt="germany flag" />
            <p className={classes.week}> 7days ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Ve
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo9} alt="nigeria flag" />
            <p className={classes.week}> 3days ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit off
          </p>
        </div>
        <div className={classes.textField}>
          <div className={classes.textFielda}>
            <img src={Logo9} alt="germany flag" />
            <p className={classes.week}> 1 weeek ago</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamcoelit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
