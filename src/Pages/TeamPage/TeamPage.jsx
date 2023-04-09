import React from "react";
import SimpleSlider from "../../Components/TeamPage/Slider/Slider";
import arrow from "../../Images/TeamPage/Union (4).svg";
import style from './TeamPage.module.css'
import Footer from '../../Components/HomePage/Footer/Footer'
      import gradient from '../../Images/HomePage/Header/bg.svg'
import gradient2 from '../../Images/HomePage/Footer/Ресурс 1@4x 2.svg'

function TeamPage() {
  return (
    <div className={style.parent}>
      <div>
        <div>
          <p>Our Team</p>
        </div>
        <div>
          <span>
            <img src={arrow} alt="" />
          </span>
          <span>
            <img src={arrow} alt="" />
          </span>
        </div>
      </div>
      <SimpleSlider />
      <Footer />
<img className={style.gradient} src={gradient} alt="gradTYpe" />
<img className={style.gradient2} src={gradient2} alt="gradTYpe" />
    </div>
  );
}

export default TeamPage;
