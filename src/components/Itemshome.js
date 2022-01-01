import React from "react";
import Chevron from "react-chevron";
import "../CSS/keyboard.css";
function Itemshome(props) {
  const {
    image1,
    image2,
    image3,
    title1,
    title2,
    theme,
    cardtitle1,
    cardtitle2,
  } = props;
  return (
    <div>
      <div className="display">
        <div className="card bg-dark text-white ">
          <img className="card-img" src={image1} alt="Card" />
          <div className="card-img-overlay d-flex flex-column justify-content-end mx-5">
            <h1 className="card-title">
              {" "}
              <strong>
                {title1} <span style={{ color: theme }}>{title2}</span>{" "}
              </strong>{" "}
            </h1>
            <h2 className="card-text">
              <strong>GAME ON !</strong>
            </h2>
            <h3 className="card-text">
              <strong>TKL BLACK-LIT</strong>{" "}
            </h3>
            <h5 className="card-text" style={{ color: "#ffe000" }}>
              LEARN MORE <Chevron direction={"right"} />
            </h5>
          </div>
        </div>
      </div>
      <div className="display-items ">
        <div
          className="addvertise-1"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <h2 className="mx-auto">{cardtitle1}</h2>
          <h3 className="learn-more mx-auto">
            Learn More <Chevron direction={"right"} />{" "}
          </h3>
        </div>
        <div
          className="addvertise-2"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <h2 className="mx-auto">{cardtitle2}</h2>
          <h3 className="learn-more mx-auto">
            Learn More <Chevron direction={"right"} />{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Itemshome;
