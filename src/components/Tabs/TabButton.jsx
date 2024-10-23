import { useState, useContext } from "react";
import { TabContext } from "../../components";

const TabButton = ({ type }) => {
    const { currentTab, setCurrentTab } = useContext(TabContext);
  const [isHovered, setIsHovered] = useState(false);
  
  const getHoverStyle = (type) => {
    return {backgroundColor: isHovered ? `var(--${type}-500)` : "var(--tan-background)"};
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      type="button"
      className={`${type}-tab`}
      onClick={() => {
        setCurrentTab(type);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={getHoverStyle(type)}
    >
      {type}
    </button>
  );
};
export default TabButton;
