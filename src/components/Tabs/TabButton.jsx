import { useState, useContext } from "react";
import { TabContext } from "../../components";
import { useNavigate } from "react-router-dom";

const TabButton = ({ type }) => {
  const { currentTab, setCurrentTab } = useContext(TabContext);
  const [isHovered, setIsHovered] = useState(false);

  const getHoverStyle = (type) => {
    if (type === "build") {
      return {
        backgroundColor: isHovered
          ? `var(--${type}-600)`
          : `var(--${type}-500)`,
      };
    } else {
      return {
        backgroundColor: isHovered
          ? `var(--${type}-500)`
          : "var(--tan-background)",
      };
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`${type}-tab`}
      onClick={() => {
        type == "build" ? navigate("build-info") : setCurrentTab(type);
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
