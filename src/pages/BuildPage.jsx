import { useState, useContext } from "react";

import {ActiveSlots, Inventory, Outer} from "../components";
import { TabContext } from "../components/TabContext";
import { CategoryContext } from "../components/CategoryContext";
import { createGlobalStyle } from "styled-components";
import { colors, getCurrentStyle } from "../Colors";
import { Outlet } from "react-router-dom";

const BuildPage = () => {
  //final build states
  const build = {
    build: {
      title:"",
      description:"",
      levelOrder:"",
      champ: "",
    },
    weapon: [],
    spirit: [],
    vitality: [],
    flex: [],
  };
  const [currentBuild, setCurrentBuild] = useState(build);
  const [currentTab, setCurrentTab] = useState("weapon");

  //build category states
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [layout, setLayout] = useState([]);

  return (
    <CategoryContext.Provider
    value={{
      categories,
      setCategories,
      currentCategory,
      setCurrentCategory,
      layout, 
      setLayout,
    }} >
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
      <Outlet/>
    </TabContext.Provider>
    </CategoryContext.Provider>
    
  );
};
export default BuildPage;
