import React from "react";
import Itemshome from "./Itemshome";
import { MouseRazer, Hyperx, Gamenote } from "../images/index";
function Mouse() {
  return (
    <div>
      <Itemshome
        image1={MouseRazer}
        image2={Gamenote}
        image3={Hyperx}
        title1="RAZER"
        title2="VIPER MINI"
        theme="green"
        cardtitle1="GAME NOTE SAMPLE 2 Smooth AF!"
        cardtitle2="HYPERX OMNI"
      />
    </div>
  );
}

export default Mouse;
