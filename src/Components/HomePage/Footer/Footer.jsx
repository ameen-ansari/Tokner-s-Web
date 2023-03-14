import style from "./Footer.module.css";
import logo from "../../../Images/HomePage/Navbar/logo.svg";
import img1 from "../../../Images/HomePage/Footer/github 1.svg";
import img2 from "../../../Images/HomePage/Footer/facebook (4) 1.svg";
import img3 from "../../../Images/HomePage/Footer/instagram (1) 1.svg";
import img4 from "../../../Images/HomePage/Footer/medium 1.svg";
import img5 from "../../../Images/HomePage/Footer/twitter (2) 1.svg";
import img6 from "../../../Images/HomePage/Footer/reddit 1.svg";
import img7 from "../../../Images/HomePage/Footer/Vector (4).svg";

function Footer() {
  return (
    <div className={style.parent}>
      <div>
        <p>OUR TEAM</p>
        <span>/</span>
        <p>TOKENS</p>
        <span>/</span>
        <p> CONNECT WALLET</p>
        <span>/</span>
        <p>LIGHTPAPER</p>
      </div>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <div>
          <p>© 2021 Tokners. All rights reserved.</p>
          <div>
            <img src={img7} alt="" />
            <p>Design by Oleg Kulik</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
