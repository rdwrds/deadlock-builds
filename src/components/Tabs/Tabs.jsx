import { useContext, useState } from "react";
import { TabContext } from "../../components";
import TabButton from "./TabButton";
import "./Tabs.css";
const Tabs = () => {
  const { currentTab } = useContext(TabContext);

  return (
    <div className="tabs">
      <TabButton type="build"/>
      <TabButton type="weapon"/>
      <TabButton type="vitality"/>
      <TabButton type="spirit"/>
    </div>
  );
};
export default Tabs;
