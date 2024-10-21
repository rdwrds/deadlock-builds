import { useContext } from "react";
import { TabContext } from "../../components";
import {Item} from "../../components";
import { items } from "../../sorted_deadlock_items_condis";

const TierGrid = ({ tier }, key) => {
  const { currentTab, setCurrentTab, getCurrentStyle } = useContext(TabContext);
  const itemsInTier = items[currentTab][tier];

  const bgStyle = {backgroundColor: tier % 2 != 0 ? `var(--${currentTab}-700)` : `var(--${currentTab}-800)`}
  return (
    <div className="tier-grid" style={bgStyle}>
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
