import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./Carousel.module.css";
import science from "../../assets/science.jpg"
import geography from "../../assets/geography.jpg"
import speaking from "../../assets/speaking.jpg"
import astronomy from "../../assets/astronomy.jpg"



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-button`}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-button`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 2500,
      autoplaySpeed: 2500,
      cssEase: "linear",
      nextArrow:<SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={Style.main}>
        <h1>I want to Learn.....</h1>
        <Slider className={Style.container} {...settings}>
          <div>
           <img className={Style.image} height={100%"} width={100%"} src={science}/>
          </div>
          <div>
          <img className={Style.image} height={100%"} width={100%"} src={geography}/>
          </div>
          <div>
          <img className={Style.image} height={100%"} width={100%"} src={astronomy}/>
          </div>
          <div>
          <img className={Style.image} height={100%"} width={100%"} src={speaking}/>
          </div>
        </Slider>
      </div>
    );
  }
}