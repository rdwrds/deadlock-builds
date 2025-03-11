import ability_point from "../../assets/icons/ability_point.png";
import ability_placeholder from "../../assets/ability_icons/ability_placeholder.png";
import { getCurrentStyle } from "../../Colors";
import "./AbilityRow.css";

const AbilityRow = (props) => {
  const { abilityOrder, bind } = props;
  const styleWeight = bind == "Q" || bind == "E" ? 500 : 600;
  return (
    <div className="ability-row" style={getCurrentStyle("build", styleWeight)}>
      {abilityOrder.map((val) => {
        const icon = val ? ability_point : ability_placeholder;
        return <img src={icon} className="ability-point-slot"></img>;
      })}
    </div>
  );
};
export default AbilityRow;
