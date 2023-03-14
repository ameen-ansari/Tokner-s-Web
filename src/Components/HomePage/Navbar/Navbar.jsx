import style from "./Navbar.module.css";
import logo from "../../../Images/HomePage/Navbar/logo.svg";
import Union from '../../../Images/HomePage/Navbar/Union.svg'

function Navbar() {
  return (
    <div className={style.parent}>
      <div className={style.navbarDiv1}>
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <p>Our team</p>
          <p>Tokens</p>
          <p>Connect wallet</p>
          <p>Lightpaper</p>
        </div>
      </div>

      <div className={style.navbarDiv2}>
        <div className={`${style.dropdown} ${style.dropdown}`}>
          <p>More</p>
          <ul className={`${style.dropdownC}`}>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Blogs</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
        <button className={style.btn1}>Sign In</button>
        <button>Sign Up</button>
      </div>
      <img className={style.Union} src={Union} alt="" />
    </div>
  );
}

export default Navbar;
