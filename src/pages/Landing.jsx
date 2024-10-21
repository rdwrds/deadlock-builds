import { NavLink } from "react-router-dom";
import { colors } from "../Colors";

const Landing = () => {
    const newBuildStyle = {
        background: colors.tanBackground,
        textAlign: "center",
    }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to Deadlock Builds</h1>
      <NavLink className="nav-link" to="/new-build">new build</NavLink>
    </>
  );
};
export default Landing;
