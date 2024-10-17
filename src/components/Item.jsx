import { useContext, useState, useEffect, act } from "react";
import { TabContext } from "./TabContext";
import { colors } from "../Colors";
import HoverBody from "./HoverBody";

const Item = (obj) => {
  const { name, Activation, Slot } = obj;

  const { currentBuild, setCurrentBuild, currentTab, getCurrentStyle } =
    useContext(TabContext);

  let activeItems = [];

  useEffect(() => {
    activeItems = getActiveItems();
  }, [currentBuild]);

  const displayName = name.replace(/_/g, " ");

  const getImgUrl = () => {
    const imgUrl = new URL(`../assets/items/${name}.png`, import.meta.url).href;
    return imgUrl;
  };

  const getActiveItems = () => {
    const weaponActives = currentBuild["weapon"].filter(
      (item) => item?.["Activation"] !== "Passive"
    );
    const spiritActives = currentBuild["spirit"].filter(
      (item) => item?.["Activation"] !== "Passive"
    );
    const vitalityActives = currentBuild["vitality"].filter(
      (item) => item?.["Activation"] !== "Passive"
    );
    const flexActives = currentBuild["flex"].filter(
      (item) => item?.["Activation"] !== "Passive"
    );

    return [
      ...weaponActives,
      ...spiritActives,
      ...vitalityActives,
      ...flexActives,
    ];
  };

  const foundInSlot = currentBuild[Slot].find(
    (element) => element["name"] === name
  );
  const foundInFlex = currentBuild["flex"].find(
    (element) => element["name"] === name
  );

  const alterBuild = () => {
    //NOTE: this will not work for if items are components.
    //need extra logic to see if components of items are in a slot already zzz

    //see if the item is in a normal/flex slot already
    console.log(currentBuild);

    if (foundInSlot) {
      setCurrentBuild({
        ...currentBuild,
        [Slot]: currentBuild[Slot].filter(
          (element) => element["name"] !== name
        ),
      });
      return;
    } else if (foundInFlex) {
      setCurrentBuild({
        ...currentBuild,
        ["flex"]: currentBuild["flex"].filter(
          (element) => element["name"] !== name
        ),
      });
      return;
    }

    //if we're trying to add an active item, make sure the slots arent full
    if (Activation !== "Passive" && activeItems.length >= 4) {
      alert("cannot add item: active slots are full.");
      return;
    }

    //if an item isnt in either slot already, check if theres space in a normal slot
    //and put it there.
    if (currentBuild[Slot].length < 4) {
      setCurrentBuild({
        ...currentBuild,
        [Slot]: [...currentBuild[Slot], obj],
      });
    }
    //if normal slots are full, check if the flex are open and add it there.
    else if (currentBuild["flex"].length < 4) {
      setCurrentBuild({
        ...currentBuild,
        flex: [...currentBuild["flex"], obj],
      });
    } else {
      alert(`cannot add item: ${Slot} and flex inventories are full.`);
    }
  };

   //this is only like this because getCurrentStyle() returns an object,
  //and inline styles can only be one object. so rather than revamp
  //the whole project its easier to just do this short workaround

  let itemStyle = getCurrentStyle(currentTab);
  itemStyle = {
    ...itemStyle,
    opacity: foundInSlot || foundInFlex ? "0.3" : "1",
  };
  
  return (
    <div className="item" style={itemStyle} onClick={alterBuild}>
      <img src={getImgUrl()} alt="" />
      <p>{displayName}</p>
      <HoverBody obj={obj} />
    </div>
  );
};
export default Item;
