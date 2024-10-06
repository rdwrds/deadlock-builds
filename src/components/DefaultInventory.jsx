import { useContext, useEffect } from "react";
import { TabContext } from "./TabContext";
import { getCurrentStyle } from "../Colors";

const DefaultInventory = ({ type }) => {
  const { currentBuild } = useContext(TabContext);

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(`../assets/items/${name}.png`, import.meta.url).href;
    return imgUrl;
  };

  let img0 = getImgUrl(currentBuild[type]?.[0]?.["name"] || "placeholder");
  let img1 = getImgUrl(currentBuild[type]?.[1]?.["name"] || "placeholder");
  let img2 = getImgUrl(currentBuild[type]?.[2]?.["name"] || "placeholder");
  let img3 = getImgUrl(currentBuild[type]?.[3]?.["name"] || "placeholder");

  

  return (
    <div className={`${type}-inventory`}>
      <div className={`${type}-slots`} style={getCurrentStyle(type)}>
        <img src={img0}></img>
      </div>
      <div className={`${type}-slots`} style={getCurrentStyle(type)}>
        <img src={img1}></img>
      </div>
      <div className={`${type}-slots`} style={getCurrentStyle(type)}>
        <img src={img2}></img>
      </div>
      <div className={`${type}-slots`} style={getCurrentStyle(type)}> 
        <img src={img3}></img>
      </div>
    </div>
  );
};
export default DefaultInventory;
