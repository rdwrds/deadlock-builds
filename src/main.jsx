import { useState} from "react";
import { createRoot } from "react-dom/client";
import Outer from "./components/Outer";
import Header from "./components/Header";
import DefaultInventory from "./components/DefaultInventory";
import ActiveSlots from "./components/ActiveSlots";
import { TabContext } from "./components/TabContext";
import { createGlobalStyle } from "styled-components";
import { colors, getCurrentStyle } from "./Colors";

const Main = () => {
  const inventory = {
    champ: "",
    weapon: [],
    spirit: [],
    vitality: [], 
    flex: [],
  }
  const [currentBuild, setCurrentBuild] = useState(inventory);
  const [currentTab, setCurrentTab] = useState("weapon");

  console.log(currentBuild)

  return (
    <>
      <Header />
      <TabContext.Provider
        value={{currentBuild, setCurrentBuild, currentTab, setCurrentTab, getCurrentStyle }}
      >
        <Outer />
        <div className="inventory">
          <DefaultInventory type="weapon"/>
          <DefaultInventory type="vitality"/>
          <DefaultInventory type="spirit"/>
          <DefaultInventory type="flex"/>
          <ActiveSlots/>
        </div>
      </TabContext.Provider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Main/>);
