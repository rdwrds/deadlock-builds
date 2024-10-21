import { useState, useContext } from "react";

import {ActiveSlots, Inventory, Outer} from "../components";
import { TabContext } from "../components/TabContext";
import { createGlobalStyle } from "styled-components";
import { colors, getCurrentStyle } from "../Colors";

const BuildPage = () => {
  const inventory = {
    champ: "",
    weapon: [],
    spirit: [],
    vitality: [],
    flex: [],
  };
  const [currentBuild, setCurrentBuild] = useState(inventory);
  const [currentTab, setCurrentTab] = useState("weapon");

  return (
    <TabContext.Provider
      value={{
        currentBuild,
        setCurrentBuild,
        currentTab,
        setCurrentTab,
        getCurrentStyle,
      }}
    >
      <Outer />
      <div className="inventory">
        <Inventory type="weapon" />
        <Inventory type="vitality" />
        <Inventory type="spirit" />
        <Inventory type="flex" />
        <ActiveSlots />
      </div>
    </TabContext.Provider>
  );
};
export default BuildPage;
