import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <nav className="header">
      <div className="left-container">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/">
        Browse Builds
      </NavLink>
      <NavLink className="nav-link" to="/">
        Create New Build
      </NavLink>
      </div>
    </nav>
  );
};
export default Header;
