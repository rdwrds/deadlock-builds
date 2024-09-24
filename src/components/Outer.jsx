import Items from "./Items";
import Tabs from "./Tabs";
import Champs from "./Champs";

const Outer = () => {
  return (
    <div class="outer">
      <div class="item-tabs-container">
        <Tabs />
        <Items />
      </div>
      <Champs />
    </div>
  );
};
export default Outer;
