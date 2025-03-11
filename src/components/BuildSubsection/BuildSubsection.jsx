import "./BuildSubsection.css";
import { Item } from "../../components";

const BuildSubsection = ({ category, currentCategory, setCurrentCategory, children }) => {

  return (
    <div
      //className="build-subsection"
      //style={testStyle}
      onClick={() => {
        onClick();
      }}
    >
        {children}
    </div>
  );
};
export default BuildSubsection;
