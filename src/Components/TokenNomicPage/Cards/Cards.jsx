import style from "./Cards.module.css";

function Cards() {
  return (
    <>
      <div className={style.parent}>
        <div className={style.cardsParent}>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#22A75D",
                  boxShadow: "0px 15px 25px rgba(34, 167, 93, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#22A75D",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 1
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#FFD100",
                  boxShadow: "0px 15px 25px rgba(255, 209, 0, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#FFD100",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 2
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#0F87CA",
                  boxShadow: "0px 15px 25px rgba(15, 135, 202, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#0F87CA",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 3
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#E20613",
                  boxShadow: "0px 15px 25px rgba(226, 6, 19, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#E20613",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 4
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#22A75D",
                  boxShadow: "0px 15px 25px rgba(34, 167, 93, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#22A75D",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 5
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#FFD100",
                  boxShadow: "0px 15px 25px rgba(255, 209, 0, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#FFD100",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 6
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#0F87CA",
                  boxShadow: "0px 15px 25px rgba(15, 135, 202, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#0F87CA",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 7
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <span
                style={{
                  background: "#E20613",
                  boxShadow: "0px 15px 25px rgba(226, 6, 19, 0.25)",
                }}
                className={style.curvespan}
              ></span>
              <span
                style={{
                  color: "#E20613",
                  marginLeft: "1rem",
                }}
                className={style.curvespanp}
              >
                Year 8
              </span>
            </div>
            <div>
              <p>Day 1 - Day 90</p>
              <p>10M Tokens/Day</p>
              <p>(900M Tokens)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.parent2}>
        <div className={style.cardsParent2}>
          <div className={style.carda}>
            <p>
              Proposal regarding Total Supply, ICO and Pricing Total Supply
              (after periodical increase of supply):
            </p>
            <p>10,000,000,000</p>
            <span>Tokens</span>
          </div>
          <div className={style.cardb}>
            <p>Supply at Genesis:</p>
            <p>3,000,000,000</p>
            <span>Tokens</span>
            <p>
              from the Genesis supply, 2,500,000,000 will be reserved for the
              ICO while 500,000,000 will be allocated for team members, founders
              and to onboard celebrities and influencers.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
