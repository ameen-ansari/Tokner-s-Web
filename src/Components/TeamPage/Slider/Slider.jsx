import React, { Component } from "react";
import Slider from "react-slick";
import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/TeamPage/image 1.svg";
import img2 from "../../../Images/TeamPage/image 2.svg";
import img3 from "../../../Images/TeamPage/image 3.svg";
import img4 from "../../../Images/TeamPage/image 4.svg";
import arrow from '../../../Images/TeamPage/Union (4).svg'
import bg from '../../../Images/TeamPage/Group 26.svg'

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
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
      arrows: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            dots: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1800,
          settings: {
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 650,
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
          <div>
        <div>
          <p>Our Team</p>
        </div>
        <div>
          <span onClick={this.previous} className='cursor-pointer'>
            <img src={arrow} alt="" />
          </span>
          <span onClick={this.next} className='cursor-pointer'>
            <img  src={arrow} alt="" />
          </span>
        </div>
      </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div className={style.card}>
                <div>
                  <p>Brad pie</p>
                  <p>CEO and Co founder</p>
                </div>
                <img src={img1} alt="" />
              </div>
              <div className={`${style.card} ${style.ceo}`}>
                <div>
                  <p>Naveed Serwer</p>
                  <p>CTO and Co founder</p>
                </div>
                <img src={img2} alt="" />
              </div>
              <div className={style.card}>
                <div>
                  <p>Shan khan</p>
                  <p>CTO and Co founder</p>
                </div>
                <img src={img3} alt="" />
              </div>
              <div className={style.card}>
                <div>
                  <p>Shan lopez</p>
                  <p>CTO and Co founder</p>
                </div>
                <img src={img4} alt="" />
              </div>
              <div className={style.card}>
                <div>
                  <p>Lilly</p>
                  <p>CTO and Co founder</p>
                </div>
                <img src={img1} alt="" />
              </div>
        </Slider>
      </div>
    );
  }
}
