import { useState } from "react";
import Items from "./Items";
import Tabs from "./Tabs";
import Champs from "./Champs";

const Outer = () => {
  return (
    <div className="outer">
      <div className="item-tabs-container" >
          <Tabs />
          <Items />
        </div>
        <Champs />
    </div>
  );
};
export default Outer;
