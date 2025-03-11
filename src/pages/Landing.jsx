import { NavLink } from "react-router-dom";
import { colors } from "../Colors";
import nameLogo from "../assets/deadlock-logo.webp";
import abramsBanner from "../assets/deadlock-wraith-banner.webp";
import ivyBanner from "../assets/deadlock-vindicta-banner.png";
import "./Landing.css";

const Landing = () => {
  const newBuildStyle = {
    background: colors.tanBackground,
    textAlign: "center",
  };

  return (
    <>
      <div className="banner-container">
        <img className="img-banner" src={ivyBanner} alt="" />
        {/* <div className="banner abrams-banner">
          {<img className="img-banner" src={abramsBanner} alt="" /> }
        </div> */}

        <div className="banner">
          <h1 className="welcome-label" style={{ marginBottom: "0" }}>
            Welcome to
          </h1>
          <img className="name-logo" src={nameLogo} alt="" />
          <h1 className="welcome-label">Builds</h1>
          <h4 className="bio welcome-label">
            A place to Create and Share Deadlock Builds
          </h4>
          <NavLink className="nav-link" to="/new-build">
            Create New Build
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Landing;
