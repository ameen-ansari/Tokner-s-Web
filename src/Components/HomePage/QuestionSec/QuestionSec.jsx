import React from "react";
import style from "./QuestionSec.module.css";
import logo from "../../../Images/HomePage/QuestionsSec/logo121.svg";
import whm from "../../../Images/HomePage/QuestionsSec/woman-hm.svg";

function QuestionSec() {
  return (
    <>
      <div className={style.Allparent}>
        <div className={style.parent}>
          <div className={style.child1}>
            <div>
              <span className={style.QP}>Q1</span>
              <div>
                <span className={style.CP}></span>
                <p>2021</p>
              </div>
            </div>
            <div>
              <div>
                <span>O1</span>
                <p>Team set-up</p>
              </div>
              <div>
                <span>O2</span>
                <p>Launch of informational website</p>
              </div>
            </div>
          </div>
          <div className={`${style.child1} ${style.child2}`}>
            <div>
              <span className={style.QP}>Q2</span>
              <div>
                <span className={style.CP}></span>
                <p>2021</p>
              </div>
            </div>
            <div>
              <div>
                <span>O1</span>
                <p>Presale and exchange listings</p>
              </div>
              <div>
                <span>O2</span>
                <p>Blockchain development and launch</p>
              </div>
              <div>
                <span>O3</span>
                <p>Launch of our MVP</p>
              </div>
              <div>
                <span>O4</span>
                <p>Influencer agency partnerships</p>
              </div>
              <div>
                <span>O5</span>
                <p>Marketing and promotion</p>
              </div>
            </div>
          </div>
          <div className={`${style.child1} ${style.child3}`}>
            <div>
              <span className={style.QP}>Q3</span>
              <div>
                <span className={style.CP}></span>
                <p>2021</p>
              </div>
            </div>
            <div>
              <div>
                <span>O1</span>
                <p>Celebrity, Creator and Influencer partnerships</p>
              </div>
              <div>
                <span>O2</span>
                <p>Expansion of creator communities on our platform</p>
              </div>
              <div>
                <span>O3</span>
                <p>More Marketing and promotion</p>
              </div>
            </div>
          </div>
          <div className={`${style.child1} ${style.child4}`}>
            <div>
              <span className={style.QP}>Q4</span>
              <div>
                <span className={style.CP}></span>
                <p>2021</p>
              </div>
            </div>
            <div>
              <div>
                <span>O1</span>
                <p>Mainstream partnerships</p>
              </div>
              <div>
                <span>O2</span>
                <p>500 active creator communities</p>
              </div>
              <div>
                <span>O3</span>
                <p>2Million active community members</p>
              </div>
              <div>
                <span>O4</span>
                <p>More Marketing and promotion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Allparent2}>
        <div className={style.UnderQSec}>
          <div>
            <div>
              <img src={logo} alt="" />
              <span>Tokner is coming</span>
            </div>
            <p>
              Cryptocurrency adoption is at less than 1% of the global world
              population with some countries and entities actively fighting
              against its mass adoption and the smartest developers and nerds
              holding the fort.
            </p>
            <p>
              Bitcoin was the first, and it has since grown to thousands of
              tokens launched all aiming to fix one problem or the other with
              some quite simply FOMOing the moment. Our goal is to bring mass
              adoption to the cryptocurrency space by dumbing it down. How far
              down? So down that even a celebrity can explain it in simple words
              to their followers and have them download an app, buy into the
              social currency of their favourite person and watch their
              investment as is with other crypto currency project.
            </p>
            <p>
              We are trying to do to this space what investment apps did for the
              "nonexistent retail investors". We are gamefying digital currency,
              bringing in popular faces instead of hard to understand projects
              to make it the norm and inadvertently being the "gateway drug" for
              a lot of people to finally give this space a real look.
            </p>
            <p>
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer.
            </p>
            <p>
              There would be new markets and advertisers with little to offer
              would not find home there. Like Kanye said,
            </p>
            <p>
              <span>“</span>"Personalities would become the new currency, and
              services would be built on top of them".{" "}
            </p>
            <p>
              Well, Kanye didn't exactly say that, but it sounds like something
              we hope he would say.
            </p>
            <p>
              Currency is digital, it has been that way for a while now, but
              this time there would be no dead presidents on the money, there
              would people like you on the money, and you would own it because
              it would make the most sense in the world.
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img src={whm} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionSec;
