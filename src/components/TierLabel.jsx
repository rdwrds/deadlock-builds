import souls_icon from "../assets/icons/souls_icon.png";

const TierLabel = ({ tier }) => {
  const tier_cost = ["500", "1,250", "3,000+", "6,200+"];

  return (
    <div className="tier-label">
      <div className="rotate-container">
        <img className="souls-icon" src={souls_icon}></img>
        <h3 className="tier-cost">{tier_cost[tier - 1]}</h3>
      </div>
    </div>
  );
};
export default TierLabel;
