import { useState } from "react";
import { useContext } from "react";
import {Items, Tabs, Champs, TabContext} from "../../components";
//import { TabContext } from "../TabContext";
import champ_placeholder from "../../assets/champs/champ_placeholder.png"

const Outer = () => {
  const { currentBuild } = useContext(TabContext);

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(`../assets/champs/${name}_card.png`, import.meta.url)
      .href;
    return imgUrl;
  };

  let currentChampPreview = currentBuild["champ"]
    ? getImgUrl(currentBuild["champ"])
    : champ_placeholder;

  return (
    <div className="outer">
      <div className="item-tabs-container">
        <Tabs />
        <Items />
      </div>
      <div className="champs-wrapper">
        <div className="build-info">
          <div className="current-champ">
            <img src={currentChampPreview} alt="" />
            <h4 className="champ-label">{currentBuild["champ"].toUpperCase()}</h4>
          </div>
          <div className="build-stats">
            
            <p>build cost</p>
          </div>
        </div>
        <Champs />
      </div>
    </div>
  );
};
export default Outer;
