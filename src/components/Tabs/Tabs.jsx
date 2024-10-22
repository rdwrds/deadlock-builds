import { useContext } from "react";
import {TabContext} from "../../components";
import './Tabs.css'
const Tabs = () => {
  const { currentTab, setCurrentTab } = useContext(TabContext);
  console.log(currentTab);
  return (
    <div className="tabs">
      <button
        type="button"
        className="weapon-tab"
        onClick={() => {
          setCurrentTab("weapon");
        }}
      >Weapon</button>
      <button
        type="button"
        className="vitality-tab"
        onClick={() => {
          setCurrentTab("vitality");
        }}
      >Vitality</button>
      <button
        type="button"
        className="spirit-tab"
        onClick={() => {
          setCurrentTab("spirit");
        }}
      >Spirit</button>
    </div>
  );
};
export default Tabs;
