import React from "react";
import Alert from "./Alert";
import "../CSS/slider.css";
import Hotdeals from "./Hotdeals";
import Slider from "./Slider";
import Newarrival from "./Newarrival";
function Home() {
  return (
    <div>
      <Alert />
      <Slider />
      <Hotdeals />
      <Newarrival />
    </div>
  );
}

export default Home;
