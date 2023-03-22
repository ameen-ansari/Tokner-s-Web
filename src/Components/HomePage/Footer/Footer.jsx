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
        <p className="cursor-pointer">OUR TEAM</p>
        <span>/</span>
        <p className="cursor-pointer">TOKENS</p>
        <span>/</span>
        <p className="cursor-pointer"> CONNECT WALLET</p>
        <span>/</span>
        <p className="cursor-pointer">LIGHTPAPER</p>
      </div>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={img1} alt="" />
          <img className="cursor-pointer" src={img2} alt="" />
          <img className="cursor-pointer" src={img3} alt="" />
          <img className="cursor-pointer" src={img4} alt="" />
          <img className="cursor-pointer" src={img5} alt="" />
          <img className="cursor-pointer" src={img6} alt="" />
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
