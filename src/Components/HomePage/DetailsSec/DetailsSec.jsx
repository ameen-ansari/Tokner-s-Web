import style from "./DetailsSec.module.css";
import img1 from "../../../Images/HomePage/Cards/Vector (2).svg";
import img2 from "../../../Images/HomePage/QuestionsSec/yellowArr.svg";
import BG from "../../../Images/HomePage/QuestionsSec/bgOfQS.svg";
import MultipleItems from "./Slider";


function DetailsSec() {
  return (
    <>
      <div className={style.parent}>
        <p>Presale Details</p>
        <MultipleItems />
    <img src={BG} alt="BG" className={style.bg}/>
      </div>
      <div className={style.parent2}>
        <p>How to buy</p>
        <div className={style.cardsparent2}>
          <div>
            <span>01</span>
            <p>
              First Connect your Metamask or TrustWallet to the "Connect Wallet"
              on the Homepage.
            </p>
          </div>
          <span>
            <img src={img1} alt="" />
          </span>
          <div>
            <span>02</span>
            <p>
            Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet
            </p>
          </div>
          <span>
            <img src={img2} alt="" />
          </span>
          <div>
            <span>03</span>
            <p>
            Then after you will received your $WNTR to your address within 24hours. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsSec;
