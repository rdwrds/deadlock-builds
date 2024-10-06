import {items} from "../sorted_deadlock_items_condis.js";

const Header = () => {
  const handleButtonClick = () => {
    console.log(items.Weapon[1].Basic_Magazine)
  };

  return (
    <div className="header">
      <button onClick={handleButtonClick}>data</button>
    </div>
  );
};
export default Header;
