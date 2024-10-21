import { useContext } from "react";
import { TabContext } from "../../components";
import { colors } from "../../Colors";

const ActiveSlots = () => {
  const {currentBuild, getCurrentStyle} = useContext(TabContext);
  
  const getActiveItems = () => {
    const weaponActives = currentBuild["weapon"].filter((item)=>item?.["Activation"] !== "Passive");
    const spiritActives = currentBuild["spirit"].filter((item)=>item?.["Activation"] !== "Passive");
    const vitalityActives = currentBuild["vitality"].filter((item)=>item?.["Activation"] !== "Passive");
    const flexActives = currentBuild["flex"].filter((item)=>item?.["Activation"] !== "Passive");
  
    return [
      ...weaponActives,
      ...spiritActives,
      ...vitalityActives,
      ...flexActives
    ]
  }

  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV"
  ]

  console.log(getActiveItems())
  const currentItems = getActiveItems();

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(`../assets/items/${name}.png`, import.meta.url).href;
    return imgUrl;
  };

  let images = [];
  for (let i = 0; i < 4; i += 1) {
    images.push(getImgUrl(currentItems?.[i]?.["name"] || "placeholder"));
  }

  return (
    <div className="active-inventory">
      {
        images.map((img, index) => {
          const tier = currentItems?.[index]?.["Tier"]
          const slot = currentItems?.[index]?.["Slot"]
          return (
            <div className="active-slots" style={getCurrentStyle(currentItems[index]?.["Slot"])}>
              <h1 className="tier-icon" style={{color: colors[`${slot}500`]}}>{romanNumerals[tier-1]}</h1>
              <img src={img}></img>
            </div>
          );
        })
      }
    </div>
  );
};

export default ActiveSlots;
