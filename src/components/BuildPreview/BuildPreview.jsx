import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TabContext, CategoryContext } from "../../components";

import "./BuildPreview.css";

const BuildPreview = () => {
  const [cost, setCost] = useState(0);
  const { currentBuild } = useContext(TabContext);
  const { title, description } = currentBuild["build"];
  const { categories, currentCategory } = useContext(CategoryContext);

  const buildCost = () => {
    let costP = 0;
    categories.map((category) => {
      if (category["items"]) {
        category["items"].map(
          (item) => (costP += Number.parseInt(item["Cost"]))
        );
      }
    });
    //alert("setting cost");
    setCost(costP);
  };

  useEffect(() => {
    buildCost(); // Recalculate cost whenever categories changes
  }, [currentCategory]);

  return (
    <div className="build-stats">
      <NavLink to="/new-build/build-info" className="preview-title">
        {title || "Untitled Build"}
      </NavLink>
      <h5 className="preview-desc">
        {description || "There is no desc. for this build."}
      </h5>
      <h4 className="build-cost">Total Souls: {cost}</h4>
    </div>
  );
};
export default BuildPreview;
