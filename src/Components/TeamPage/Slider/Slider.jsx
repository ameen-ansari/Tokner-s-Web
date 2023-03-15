import React, { Component } from "react";
import Slider from "react-slick";
import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/TeamPage/image 1.svg";
import img2 from "../../../Images/TeamPage/image 2.svg";
import img3 from "../../../Images/TeamPage/image 3.svg";
import img4 from "../../../Images/TeamPage/image 4.svg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendDots: dots => (
        <div>
          <ul style={{ margin: "0px" }}> 
            {dots}
          </ul>
        </div>
      ),
      customPaging: () => (
        <div style={{ marginTop:'2rem', backgroundColor: "white", width: "10px", height: "10px", borderRadius: "5px" }}></div>
      ),
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1800,
          settings: {
            dots: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    let imgArr = [img1, img2, img3, img4, img1, img2];

    return (
      <div className={style.parent}>
        <Slider {...settings}>
          {imgArr.map((img, i) => {
            return (
              <div key={i} className={style.card}>
                <div>
                  <p>Lee Lee</p>
                  <p>CTO and Co founder</p>
                </div>
                <img src={img} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
