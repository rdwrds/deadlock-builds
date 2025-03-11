import { useContext, useState, useEffect } from "react";
import { TabContext, CategoryContext, HoverBody } from "../../components";
import { colors } from "../../Colors";
import "./Item.css";

const Item = (obj) => {
  const { currentBuild, setCurrentBuild, currentTab, getCurrentStyle } =
    useContext(TabContext);
  const { currentCategory } = useContext(CategoryContext);

  const { name, Activation, Slot } = obj;
  const [hover, setHover] = useState(false);
  const [parentCat, setParentCat] = useState(currentCategory);

  let activeItems = [];

  useEffect(() => {
    activeItems = getActiveItems();
  }, [currentBuild]);

  const displayName = name.replace(/_/g, " ");

  const getImgUrl = () => {
    const imgUrl = new URL(`../../assets/items/${name}.png`, import.meta.url)
      .href;
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

  //12/5: should prolly move this logic to the build info page.
  //weird to have this logic disconnected like this
  const alterBuild = () => {
    //NOTE: this will not work for if items are components.
    //need extra logic to see if components of items are in a slot already zzz

    //see if the item is in a normal/flex slot already
    console.log(currentBuild);

    if (currentCategory) {
      setParentCat(currentCategory);
      console.log(parentCat);

      //this shouldnt work because we're changing the state without
      //the hook..
      currentCategory.items = [...currentCategory.items, obj];
      //short circuit so we dont add the items to the build- just add them
      //to the category
      return;
    }

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

  if (!hover) {
    let itemStyle = getCurrentStyle(Slot);
    console.log(parentCat);

    itemStyle = {
      ...itemStyle,
      opacity: foundInSlot || foundInFlex || parentCat ? "0.3" : "1",
    };

    return (
      <div
        className="item"
        style={itemStyle}
        onClick={alterBuild}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img src={getImgUrl()} alt="" loading="lazy" />
        <p>{displayName}</p>
        <HoverBody obj={obj} />
      </div>
    );
  } else {
    let itemStyle = {
      backgroundColor: currentCategory ? "var(--build-600)" : "rgba(0,0,0,.7)",
    };

    console.log(parentCat);

    return (
      <div
        className="item"
        style={itemStyle}
        onClick={alterBuild}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {currentCategory ? <h4>Add to Category</h4> : <h4>Add to Build</h4>}
        <HoverBody obj={obj} />
      </div>
    );
  }
};
export default Item;
