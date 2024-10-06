import { useContext } from "react";
import { TabContext } from "./TabContext";
import { colors } from "../Colors";

const Item = (obj) => {
  const {
    name,
    Activation,
    Cooldown,
    Cost,
    Description,
    Slot,
    Tier,
    Conditionals,
  } = obj;

  const {
    currentBuild,
    setCurrentBuild,
    currentTab,
    setCurrentTab,
    getCurrentStyle,
  } = useContext(TabContext);

  const stats = Conditionals ? Object.entries(Conditionals) : [];

  const displayName = name.replace(/_/g, " ");

  const getImgUrl = () => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(`../assets/items/${name}.png`, import.meta.url).href;
    return imgUrl;
  };

  let test = "";
  const alterBuild = () => {
    //NOTE: this will not work for if items are components.
    //need extra logic to see if components of items are in a slot already zzz

    //see if the item is in a normal/flex slot already
    const foundInSlot = currentBuild[Slot].findIndex(
      (element) => element["name"] === name
    );
    const foundInFlex = currentBuild["flex"].findIndex(
      (element) => element["name"] === name
    );

    if (foundInSlot != -1) {
      setCurrentBuild({
        ...currentBuild,
        [Slot]: currentBuild[Slot].filter(
          (element) => element["name"] !== name
        ),
      });
      return;
    } else if (foundInFlex != -1) {
      setCurrentBuild({
        ...currentBuild,
        ["flex"]: currentBuild["flex"].filter(
          (element) => element["name"] !== name
        ),
      });
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

    if (foundInFlex != -1) {
      setCurrentBuild({
        ...currentBuild,
        [Slot]: currentBuild["flex"].filter(
          (element) => element["name"] !== name
        ),
      });
    }
  };

  return (
    <div
      className="item"
      style={getCurrentStyle(currentTab)}
      onClick={alterBuild}
    >
      <img src={getImgUrl()} alt="" />
      <p>{displayName}</p>
      <div className="hide" style={getCurrentStyle(currentTab)}>
        <h3 style={{ margin: "0" }}>{displayName}</h3>
        <div className="hide-body" style={getCurrentStyle(currentTab)}>
          <p>{Description}</p>
          <section>
            {stats &&
              stats.map((stat) => {
                const [name, val] = stat;
                return (
                  <p>
                    {name}: {val}
                  </p>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};
export default Item;
