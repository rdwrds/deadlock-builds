import { useContext, useEffect } from "react";
import { TabContext } from "../../components";
import { colors, getCurrentStyle } from "../../Colors";

const Inventory = ({ type }) => {
  const { currentBuild } = useContext(TabContext);

  const romanNumerals = ["I", "II", "III", "IV"];

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(`../assets/items/${name}.png`, import.meta.url).href;
    return imgUrl;
  };

  let images = [];
  for (let i = 0; i < 4; i += 1) {
    images.push(getImgUrl(currentBuild[type]?.[i]?.["name"] || "placeholder"));
  }

  return (
    <div className={`${type}-inventory`}>
      {images.map((img, index) => {
        const tier = currentBuild[type]?.[index]?.["Tier"];
        const slot = currentBuild[type]?.[index]?.["Slot"];
        return (
          <div className={`${type}-slots`} style={getCurrentStyle(slot)}>
            <h1 className="tier-icon" style={{ color: colors[`${slot}500`] }}>
              {romanNumerals[tier - 1]}
            </h1>
            <img src={img}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Inventory;
