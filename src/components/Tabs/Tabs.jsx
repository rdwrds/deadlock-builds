import { useContext, useState } from "react";
import { TabContext } from "../../components";
import TabButton from "./TabButton";
import "./Tabs.css";
const Tabs = () => {
  const { currentTab } = useContext(TabContext);
 
  console.log(currentTab);

  return (
    <div className="tabs">
      <TabButton type="weapon"/>
      <TabButton type="vitality"/>
      <TabButton type="spirit"/>
    </div>
  );
};
export default Tabs;
