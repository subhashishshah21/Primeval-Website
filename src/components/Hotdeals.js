import React, { useEffect, useRef, useState, useContext } from "react";
import { hotdeals } from "../images/index";
import styleContext from "../context/styleContext";
function Hotdeals() {
  const context = useContext(styleContext);
  const { yellowStyle } = context;
  const [timerDay, settimerDay] = useState();
  const [timerHours, settimerHours] = useState();
  const [timerMinute, settimerMinute] = useState();
  const [timerSecounds, settimerSecounds] = useState();
  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("Jan 1, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      if (distance < 0) {
        clearInterval(interval.current);
        settimerDay("00");
        settimerHours("00");
        settimerMinute("00");
        settimerSecounds("00");
      } else {
        settimerDay(days);
        settimerHours(hours);
        settimerMinute(minutes);
        settimerSecounds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
      
    };
  });
  return (
    <div>
      <div className="Hot-Deals">
        <div
          className="alert alert-hotdeals alert-secondary alert-dismissible fade show text-center"
          role="alert"
          style={{ backgroundColor: "black" }}
        >
          <span className="hot-deals-text">
            <strong>HOT DEALS !</strong>
          </span>
        </div>
      </div>
      <div className="Hot-deals-banner">
        <div className="card bg-dark text-white">
          <img src={hotdeals} className="card-img" alt="..." />
          <div className="card-img-overlay d-flex flex-column  align-items-start my-5 mx-4 ">
            <h2 className="card-title text-sm my-4 ">
              <strong>
                <span style={yellowStyle}>HOT DEALS </span> THIS WEEKS
              </strong>
            </h2>
            <h5 className="card-text">
              {" "}
              <strong>
                {" "}
                FOR <span style={yellowStyle}>HYPERX</span> KEYBOARDS
              </strong>{" "}
            </h5>
            <h5 className="card-text">
              {" "}
              <span style={yellowStyle}> Ending </span> IN
            </h5>
            <h5 className="card-text ">
              <strong>
                <span style={yellowStyle}>{timerDay}</span> D{" "}
                <span style={yellowStyle}>{timerHours}</span> H{" "}
                <span style={yellowStyle}>{timerMinute}</span> M{" "}
                <span style={yellowStyle}>{timerSecounds}</span> S
              </strong>
            </h5>
            <button className="btn btn-danger btn-sm "> SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotdeals;
