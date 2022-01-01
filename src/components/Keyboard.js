import React from "react";
import { redragon, razer, fantech } from "../images/index";
import "../CSS/keyboard.css";
import Itemshome from "./Itemshome";

function Keyboard() {
  return (
    <>
      <Itemshome
        image1={redragon}
        image2={razer}
        image3={fantech}
        title1="REDRAGON"
        title2="KUMARA"
        theme="red"
        cardtitle1="RAZER BLACK WIDOW V2"
        cardtitle2="FANTECH MK 853- ULTRA"
      />
    </>
  );
}

export default Keyboard;
