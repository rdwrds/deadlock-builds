import { useContext } from "react";
import { TabContext } from "../../components";
import { formatted_stats } from "../../stats";
import { colors } from "../../Colors";
import {formatted_conditionals} from '../../conditional_stats'

const HoverBody = ({ obj }) => {
  const {
    name,
    Activation,
    Cooldown,
    Cost,
    Description,
    Slot,
    Tier,
    Conditionals,
  } = obj;

  const activationText = Activation === "Passive" ? "Passive" : "Active";

  const displayName = name.replace(/_/g, " ");
  const stats = Conditionals ? Object.entries(Conditionals) : [];

  const { currentTab, getCurrentStyle } = useContext(TabContext);

  return (
    <div className="hide" style={getCurrentStyle(currentTab)}>
      <h3 className="display-name">{displayName}</h3>
      <h5 className="cost-text">{Cost}</h5>
      <div className="hide-body" style={getCurrentStyle(currentTab)}>
        <div className="activation-section">
          <p className="activation-text">{activationText}</p>
          {Cooldown != 0 && <div className="cooldown-section">{Cooldown}s</div>}
        </div>
        <p className="description-text">{Description}</p>
        <section className="base-stats">
          {Object.keys(obj).map((key) => {
            if (formatted_stats[key]) {
              const percentText = key.includes("Percent") ? "%" : "";
              return (
                <h5 className="base-stat-text">
                  {obj[key]}
                  {percentText} {formatted_stats[key]}
                </h5>
              );
            }
          })}
        </section>
        {Conditionals && (
          <div
            className="conditional-stats"
            style={{ backgroundColor: colors[`${currentTab}600`] }}
          >
            {stats &&
              stats.map((stat) => {
                const [name, val] = stat;
                return (
                  <p className="conditional-stat-text">
                    {formatted_conditionals[name]}: {val}
                  </p>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
export default HoverBody;
