import React from "react";
import Chevron from "react-chevron";
import { Link } from "react-router-dom";
import { newarrival1, newarrival2, newarrival3 } from "../images/index";

function Newarrival() {
  return (
    <div>
      <div className="New-Arrival">
        <div
          className="alert alert-hotdeals alert-secondary alert-dismissible fade show text-center"
          role="alert"
          style={{ backgroundColor: "black" }}
        >
          <span className="hot-deals-text">
            <strong>NEW-ARRIVALS !</strong>
          </span>
        </div>
      </div>
      <div className="new-arrival-body container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col my-5 ">
            <div
              className="card h-100  text-light text-center "
              style={{
                borderBottom: "2px solid #ffe000",
                backgroundColor: "black",
              }}
            >
              <img src={newarrival1} className="card-img-top" alt="..." />
              <div className="card-body  ">
                <h5 className="card-title text-center">
                  {" "}
                  <strong>EARPHONE</strong>{" "}
                </h5>
                <h4 className="card-title">
                  {" "}
                  <strong>------- FANTECH TX-1 ------</strong>{" "}
                </h4>
                <h6 className="card-text text-center ">
                  <Link
                    to="/shop"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ color: "#ffe000" }}>NRS. 4300/-</span>{" "}
                    <Chevron direction={"right"} />
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col my-5">
            <div
              className="card h-100  text-light text-center"
              style={{
                borderBottom: "2px solid #ffe000",
                backgroundColor: "black",
              }}
            >
              <img src={newarrival2} className="card-img-top " alt="..." />
              <div className="card-body  ">
                <h5 className="card-title">
                  {" "}
                  <strong>EARPHONE</strong>{" "}
                </h5>
                <h4 className="card-title">
                  {" "}
                  <strong>------- FANTECH TX-1 ------</strong>{" "}
                </h4>
                <h6 className="card-text text-center ">
                  <Link
                    to="/shop"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ color: "#ffe000" }}>NRS. 4300/-</span>{" "}
                    <Chevron direction={"right"} />
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col my-5">
            <div
              className="card h-100 text-light text-center"
              style={{
                borderBottom: "2px solid #ffe000",
                backgroundColor: "black",
              }}
            >
              <img src={newarrival3} className="card-img-top" alt="..." />
              <div className="card-body  ">
                <h5 className="card-title">
                  {" "}
                  <strong>EARPHONE</strong>{" "}
                </h5>
                <h4 className="card-title">
                  {" "}
                  <strong>------- FANTECH TX-1 ------</strong>{" "}
                </h4>
                <h6 className="card-text text-center ">
                  <Link
                    to="/shop"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ color: "#ffe000" }}>NRS. 4300/-</span>{" "}
                    <Chevron direction={"right"} />
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newarrival;
