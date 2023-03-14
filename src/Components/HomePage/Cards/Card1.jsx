import style from "./Card1.module.css";
import vector1 from "../../../Images/HomePage/Cards/Vector.svg";
import vector2 from "../../../Images/HomePage/Cards/Vector (1).svg";
import Union1 from "../../../Images/HomePage/Cards/Union (1).svg";
import Union2 from "../../../Images/HomePage/Cards/Union (2).svg";
import img1 from '../../../Images/HomePage/Cards/Mask Group.svg'
import img2 from '../../../Images/HomePage/Cards/Mask Group (1).svg'

function Card1() {
  return (
    <>
      <div className={style.parent}>
        <div className={style.cardsParent}>
          <div className={style.Card1}>
            <div>
              <img src={vector1} alt="" />
            </div>
            <p>
              For<span>Creators</span>
            </p>
            <p>
              Creators can gain independence through a decentralised digital
              currency system that is dependent on growing and engaging with the
              community and also their star power. They own 10-15% of the total
              value of the tokens minted.
            </p>
            <div>
              <p>Learn More</p>
              <img src={Union1} alt="" />
            </div>
          </div>
          <div className={style.Card2}>
            <div>
              <img src={vector2} alt="" />
            </div>
            <p>
              For<span>Holders</span>
            </p>
            <p>
              Holding social tokens allows the individual to gain access to
              benefits including unreleased content, private communities, direct
              access to celebrity, early- access to tickets and more as well as
              the ability to trade with other communities in order to gain
              access to more creator content with early token buyers being the
              biggest winners as the value of the token increases with more
              buyers.
            </p>
            <div>
              <p>Learn More</p>
              <img src={Union2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.parent2}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div className={style.whiteCard}>
          <p>What makes us different?</p>
          <p>
            We would only launch tokens with the express permission of the
            creators.
          </p>
          <p>
            There are several thousand celebrities and creators on twitter,
            tiktok, Instagram and YouTube with followings in the millions who we
            would be actively engaging before we go viral.
          </p>
          <p>
            We would get them on our platform and they would see the opportunity
            to create a fan driven digital economy where their digital content
            can be traded as NFTs and their most loyal fans can have the
            monetary value of their creator's currency increase significantly as
            they promote their digital currency across their channels while our
            native token holders benefit from the Weentar popularity.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card1;
