import style from "./DetailsSec.module.css";
import img1 from "../../../Images/HomePage/Cards/Vector (2).svg";
import MultipleItems from "./Slider";


function DetailsSec() {
  return (
    <>
      <div className={style.parent}>
        <p>Presale Details</p>
        {/* <div className={style.cardParent}>
          <div>
            <div>
              <span>Q1</span>
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
          <div>
            <div>
              <span>Q1</span>
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
          <div>
            <div>
              <span>Q1</span>
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
        </div> */}
        <MultipleItems />
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
              First Connect your Metamask or TrustWallet to the "Connect Wallet"
              on the Homepage.
            </p>
          </div>
          <span>
            <img src={img1} alt="" />
          </span>
          <div>
            <span>03</span>
            <p>
              First Connect your Metamask or TrustWallet to the "Connect Wallet"
              on the Homepage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsSec;
