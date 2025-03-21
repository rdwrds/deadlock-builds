import { TabContext } from "../../components";
import { useContext } from "react";
import "./Champs.css";

const Champs = () => {
  const champs_names = [
    "Abrams",
    "Bebop",
    "Dynamo",
    "Grey_Talon",
    "Haze",
    "Infernus",
    "Ivy",
    "Kelvin",
    "Lady_Geist",
    "Lash",
    "McGinnis",
    "Mirage",
    "Mo_&_Krill",
    "Paradox",
    "Pocket",
    "Seven",
    "Shiv",
    "Vindicta",
    "Viscous",
    "Warden",
    "Wraith",
    "Yamato",
  ];

  const { currentBuild, setCurrentBuild } = useContext(TabContext);

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(
      `../../assets/champs/${name}_card.png`,
      import.meta.url
    ).href;
    return imgUrl;
  };

  const setCurrentChamp = (name) => {
    if (currentBuild["build"]["champ"] === name) {
      setCurrentBuild({
        ...currentBuild,
        build: {
          ...currentBuild.build,
          champ: "",
        },
      });
      return;
    }

    setCurrentBuild({
      ...currentBuild,
      build: {
        ...currentBuild.build,
        champ: name,
      },
    });
  };

  return (
    <div className="champs">
      {champs_names.map((name) => {
        const op = currentBuild["build"]["champ"] === name ? 0.3 : 1;
        return (
          <div
            className="champ"
            onClick={() => {
              setCurrentChamp(name);
            }}
            style={{ opacity: op }}
            key={name}
          >
            <img src={getImgUrl(name)} alt={name} loading="lazy" />
            <h3 className="champ-label">
              {name.replaceAll("_", " ").toUpperCase()}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
export default Champs;
