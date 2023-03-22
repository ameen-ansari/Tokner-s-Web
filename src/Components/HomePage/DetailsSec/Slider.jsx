import React, { Component } from "react";
import Sliderr from "react-slick";
import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 950,
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
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ]
    };
    return (
      <div className={style.cardParent}>
        <Sliderr {...settings}>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#22a75d",
                  boxShadow: "0px 15px 25px rgba(34, 167, 93, 0.25)",
                }}
              >
                Q1
              </span>
            </div>
            <div>
              <p>Phase One</p>
              <p>0/04/2021</p>
            </div>
            <div>
              <p>1 BNB = 100000 WNTR</p>
              <p>
                Soft cap:<span>5000 BNB</span>
              </p>
              <p>
                Hard cap:<span>10000 BNB</span>
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#2278d4",
                  boxShadow: "0px 15px 25px rgba(34, 120, 212, 0.25)",
                }}
              >
                Q2
              </span>
            </div>
            <div>
              <p>Phase One</p>
              <p>0/04/2021</p>
            </div>
            <div>
              <p>1 BNB = 100000 WNTR</p>
              <p>
                Soft cap:<span>5000 BNB</span>
              </p>
              <p>
                Hard cap:<span>10000 BNB</span>
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#ffd100",
                  boxShadow: "0px 15px 25px rgba(255, 209, 0, 0.25)",
                }}
              >
                Q3
              </span>
            </div>
            <div>
              <p>Phase One</p>
              <p>0/04/2021</p>
            </div>
            <div>
              <p>1 BNB = 100000 WNTR</p>
              <p>
                Soft cap:<span>5000 BNB</span>
              </p>
              <p>
                Hard cap:<span>10000 BNB</span>
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#e20613",
                  boxShadow: "0px 15px 25px rgba(226, 6, 19, 0.25)",
                }}
              >
                Q4
              </span>
            </div>
            <div>
              <p>Phase One</p>
              <p>0/04/2021</p>
            </div>
            <div>
              <p>1 BNB = 100000 WNTR</p>
              <p>
                Soft cap:<span>5000 BNB</span>
              </p>
              <p>
                Hard cap:<span>10000 BNB</span>
              </p>
            </div>
          </div>
        </Sliderr>
      </div>
    );
  }
}
