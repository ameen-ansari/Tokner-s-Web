import style from "./Navbar.module.css";
import logo from "../../../Images/HomePage/Navbar/logo.svg";
import Union from "../../../Images/HomePage/Navbar/Union.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [border, setBorder] = useState("home");

  let navigate = useNavigate();
  let pushSlash = () => {
    navigate("/");
    removeOffC();
  };
  let pushTeamPage = () => {
    navigate("/team");
    setBorder("teamP");
    removeOffC();
  };
  let pushTokenPage = () => {
    navigate("/token");
    setBorder("tokenP");
    removeOffC();
  };
  let showOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.bottom = "-90vh";
    offC.style.transition = "0.5s";
  };
  let removeOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.bottom = "100vh";
    offC.style.transition = "0.5s";
  };

  return (
    <div className={style.allParent}>
      <div className={style.parent}>
        <div className={style.navbarDiv1}>
          <div>
            <img onClick={pushSlash} src={logo} alt="" />
          </div>
          <div>
            <p
              style={{ cursor: "pointer" }}
              className={border === "teamP" ? style.active : null}
              onClick={pushTeamPage}
            >
              Our team
            </p>
            <p
              style={{ cursor: "pointer" }}
              className={border === "tokenP" ? style.active : null}
              onClick={pushTokenPage}
            >
              Tokens
            </p>
            <p>Connect wallet</p>
            <p>Lightpaper</p>
          </div>
        </div>

        <div className={style.navbarDiv2}>
          <div className={`${style.dropdown} ${style.dropdown}`}>
            <p>More</p>
            <ul className={`${style.dropdownC}`}>
              <li>
                <p onClick={pushTeamPage}>Our team</p>
              </li>
              <li>
                <p onClick={pushTokenPage}>Tokens</p>
              </li>
              <li>
                <p>Connect wallet</p>
              </li>
              <li>
                <p>Lightpaper</p>
              </li>
            </ul>
          </div>
          <button className={style.btn1}>
            Sign In
          </button>
          <button>Sign Up</button>
        </div>
          <img onClick={showOffC} className={style.Union} src={Union} alt="" />
      <div id="offC" className={style.offcanvas}>
        <div>
          <p className={style.cencel} onClick={removeOffC}>
            X
          </p>
          <p
            style={{ cursor: "pointer" }}
            className={border === "teamP" ? style.active : null}
            onClick={pushTeamPage}
          >
            Our team
          </p>
          <p
            style={{ cursor: "pointer" }}
            className={border === "tokenP" ? style.active : null}
            onClick={pushTokenPage}
          >
            Tokens
          </p>
          <p>Connect wallet</p>
          <p>Lightpaper</p>
          <button>Sign Up</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
