import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
    </div>
  );
};
export default Header;
