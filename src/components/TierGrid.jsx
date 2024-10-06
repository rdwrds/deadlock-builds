import { useContext } from "react";
import { TabContext } from "./TabContext";
import Item from "./Item";
import { items } from "../sorted_deadlock_items_condis";

const TierGrid = ({ tier }, key) => {
  const { currentTab, setCurrentTab, getCurrentStyle } = useContext(TabContext);
  const itemsInTier = items[currentTab][tier];

  return (
    <div className="tier-grid" >
      {Object.entries(itemsInTier).map((item) => {
        const [name, stats] = item
        return(
          <Item name={name} {...stats} key={name}/>
        );
      })}
    </div>
  );
};
export default TierGrid;
