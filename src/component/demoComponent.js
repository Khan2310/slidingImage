import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import image1 from "./image01.jpg";
import image2 from "./image02.jpg";
import image3 from "./image02.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      vertical: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <img src={image1} alt="image" />
          </div>
          <div>
            <h3>2</h3>
            <img src={image2} alt="image" />
          </div>
          <div>
            <h3>3</h3>
            <img src={image3} alt="image" />
          </div>
          <div>
            <h3>4</h3>
            <img src={image1} alt="image" />
          </div>
          <div>
            <h3>5</h3>
            <img src={image2} alt="image" />
          </div>
          <div>
            <h3>6</h3>
            <img src={image3} alt="image" />
          </div>
        </Slider>
      </div>
    );
  }
}
