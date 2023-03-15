import React from "react";
import SimpleSlider from "../../Components/TeamPage/Slider/Slider";
import arrow from "../../Images/TeamPage/Union (4).svg";
import style from './TeamPage.module.css'
import Footer from '../../Components/HomePage/Footer/Footer'

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
    </div>
  );
}

export default TeamPage;
