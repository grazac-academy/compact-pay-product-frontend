import Logo from "assets/Landing/stars.svg";
import Logo1 from "assets/Landing/half star.svg";
import Logo2 from "assets/Landing/no star.svg";
import Logo3 from "assets/Landing/smithMorgan.svg";
import Logo4 from "assets/Landing/smithmorgan 5.svg";
import Logo5 from "assets/Landing/smithMorgan2.svg";
import Logo6 from "assets/Landing/smithMorgan3.svg";
import Logo7 from "assets/Landing/smithMorgan4.svg";
import Logo8 from "assets/Landing/germany flag.svg";
import Logo9 from "assets/Landing/nigerMap.svg";
import "./Carousel.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./Carousel.module.css";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      width: ["50%"],
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 7000,
      centerMode: true,
      cssEase: "linear",
      className: "center",
      centerPadding: "60px",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={classes.carousel}>
        <div className={classes.ratings}>
          <div className={classes.review}>
            {" "}
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
              {" "}
              <p>3.5</p>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          className={classes.slider1}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider1 = slider)}
          slidesToShow={4}
          swipeToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          speed={1}
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
        </Slider>

        <Slider
          className={classes.slider}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider1 = slider)}
        >
          <div className={classes.textField}>
            <div className={classes.textFielda}>
              <img src={Logo8} alt="germany flag" />
              <p className={classes.week}> 1hour ago</p>
            </div>
            <p className={classes.carotext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className={classes.textField}>
            <div className={classes.textFielda}>
              <img src={Logo8} alt="germany flag" />
              <p className={classes.week}> 1 weeek ago</p>
            </div>
            <p className={classes.carotext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className={classes.textField}>
            <div className={classes.textFielda}>
              <div>
                <img src={Logo8} alt="germany flag" />
              </div>
              <p className={classes.week}> 7days ago</p>
            </div>
            <p className={classes.carotext}>
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className={classes.textField}>
            <div className={classes.textFielda}>
              <img src={Logo9} alt="nigeria flag"  className={classes.nigeria}/>
              <p className={classes.week}> 3days ago</p>
            </div>
            <p className={classes.carotext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className={classes.textField}>
            <div className={classes.textFielda}>
              <img src={Logo9} alt="germany flag" className={classes.nigeria} />
              <p className={classes.weeek}> 1 weeek ago</p>
            </div>
            <p className={classes.carotext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
