import style from "./Header.module.css";
import img from "../../../Images/TokenNomicPage/Mask Group (5).svg";

function Header() {
  return (
    <>
      <div className={style.parent}>
        <div>
          <div>
            <p>Tknrs Tokenomics and Token Distribution</p>
          </div>
          <div>
            <p>Premined Tokens</p>
            <p>3,000,000,000</p>
            <p>Tknrs Tokens</p>
          </div>
        </div>
        <div>
          <div>
            <p>Tknrs Token Distribution Schedule Total Supply:</p>
            <p>10,000,000,000</p>
            <p>Tknrs Tokens</p>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <p>Daily Token Distribution</p>
            <p>7,000,000,000</p>
            <p>Tknrs Tokens</p>
          </div>
        </div>
      </div>
      <div className={style.Before575}>
        <div>
          <p>Tknrs Token Distribution Schedule Total Supply:</p>
          <p>10,000,000,000</p>
          <p>Tknrs Tokens</p>
        </div>
        <div>
          <p>Daily Token Distribution</p>
          <p>7,000,000,000</p>
          <p>Tknrs Tokens</p>
        </div>
      </div>
      <div className={style.HeaderSite}>
        <div>
          <p>Tknrs Token Distribution Schedule Total Supply:</p>
          <p>10,000,000,000</p>
          <p>Tknrs Tokens</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
