import { useContext, useState } from "react";
import { exportBuild, importBuild } from "../../utils/jwt_helper";
import { CategoryContext } from "../CategoryContext";
import "./BuildSharer.css";
import { TabContext } from "../TabContext";

const BuildSharer = () => {
  const { categories, setCategories } = useContext(CategoryContext);
  const { currentBuild } = useContext(TabContext);
  const [tokenToImport, setTokenToImport] = useState("");

  const submitBuild = (e) => {
    e.preventDefault();
    const items = importBuild(tokenToImport);
  };

  const copyBuild = () => {
    const token = exportBuild(categories, currentBuild["build"]);
  };

  return (
    <div className="sharer-container">
      <form onSubmit={submitBuild} className="sharer-form" autoComplete="off">
        <input
          type="text"
          name="build-token"
          id=""
          className="build-token"
          onChange={(e) => {
            setTokenToImport(e.target.value);
          }}
        />
      </form>
      <button className="category-button" onClick={copyBuild}>
        Export Build
      </button>
    </div>
  );
};
export default BuildSharer;
