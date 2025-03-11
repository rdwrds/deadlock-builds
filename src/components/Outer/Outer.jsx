import { useState } from "react";
import { useContext } from "react";
import {
  Items,
  Tabs,
  Champs,
  TabContext,
  CategoryContext,
  BuildPreview,
} from "../../components";
//import { TabContext } from "../TabContext";
import champ_placeholder from "../../assets/champs/champ_placeholder.png";
import "./Outer.css";
import { NavLink } from "react-router-dom";

const Outer = () => {
  const { currentBuild } = useContext(TabContext);
  //const { currentBuild } = useContext(TabContext);

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(
      `../../assets/champs/${name}_card.png`,
      import.meta.url
    ).href;
    return imgUrl;
  };

  let currentChampPreview = currentBuild["build"]["champ"]
    ? getImgUrl(currentBuild["build"]["champ"])
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
            <h4 className="champ-label">
              {currentBuild["build"]["champ"]
                .replaceAll("_", " ")
                .toUpperCase()}
            </h4>
          </div>
          <BuildPreview />
        </div>
        <Champs />
      </div>
    </div>
  );
};
export default Outer;
