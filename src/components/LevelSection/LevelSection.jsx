import { useState, useEffect, useContext } from "react";
import { AbilityRow, TabContext } from "../../components";
import { data } from "../../champ_ability_data";
import "./LevelSection.css";

const LevelSection = () => {
  const { currentBuild } = useContext(TabContext);
  const currentChamp = currentBuild["build"]["champ"];

  //have 4 ability vars(non state to avoid rerenders), fill with zero/nulls/w-e
  const maxLevel = 12;
  const [currentLevel, setCurrentLevel] = useState(0);
  const [abilityOrder, setAbilityOrder] = useState(Array(maxLevel).fill(""));
  //const [counts, setCounts] = useState({})

  const [qOrder, setqOrder] = useState(Array(maxLevel).fill(""));
  const [wOrder, setwOrder] = useState(Array(maxLevel).fill(""));
  const [eOrder, seteOrder] = useState(Array(maxLevel).fill(""));
  const [rOrder, setrOrder] = useState(Array(maxLevel).fill(""));

  useEffect(() => {
    abilityOrder.map((ability, index) => {
      switch (ability) {
        case "Q":
          setqOrder((prev) => {
            const newOrder = [...prev];
            newOrder[index] = ability;

            return newOrder;
          });
          break;
        case "W":
          setwOrder((prev) => {
            const newOrder = [...prev];
            newOrder[index] = ability;

            return newOrder;
          });
          break;
        case "E":
          seteOrder((prev) => {
            const newOrder = [...prev];
            newOrder[index] = ability;

            return newOrder;
          });
          break;
        case "R":
          setrOrder((prev) => {
            const newOrder = [...prev];
            newOrder[index] = ability;

            return newOrder;
          });
          break;
      }
    });
  }, [abilityOrder]);

  //have level order state
  //set specific index of what skill is leveled (up to maxLevel)

  //render each row based on the stats

  const addAbilityPoint = (ability) => {
    //if were above max level dont even bother
    if (currentLevel >= maxLevel) return;

    const counts = {};
    for (const bind of abilityOrder) {
      if (bind != "") counts[bind] = counts[bind] ? counts[bind] + 1 : 1;
    }

    if (counts[ability] >= 3) {
      alert("ability at max level");
      return;
    }

    setAbilityOrder((previousOrder) => {
      const newOrder = [...previousOrder];
      newOrder[currentLevel] = ability;

      return newOrder;
    });
    setCurrentLevel(currentLevel + 1);
  };

  const getHeroAbilities = () => {
    //if a hero aint selected, just return
    if (!currentChamp) return ["Consume", "Consume", "Consume", "Consume"];

    const champData = data.find((champ) => champ["hero"] === currentChamp);
    console.log(champData);

    if (champData) {
      const { Ability1, Ability2, Ability3, Ability4 } = champData;
      console.log(Ability1);

      return [Ability1, Ability2, Ability3, Ability4];
    } else {
      //if we have a champ selected but cant find their data, log it (should throw an error)
      console.log(`cannot find champion data for hero: ${currentChamp}`);
    }

    //data.map((hero) => console.log(hero.hero));+
    console.log(currentChamp || "unselected");
  };

  const [img1, img2, img3, img4] = getHeroAbilities();

  const getImgUrl = (name) => {
    let ext = ".png"; // can be anything
    const imgUrl = new URL(
      `../../assets/ability_icons/${name}.png`,
      import.meta.url
    ).href;
    return imgUrl;
  };

  return (
    <div className="level-section">
      <div className="ability-icons">
        <img
          src={getImgUrl(img1)}
          onClick={() => {
            addAbilityPoint("Q");
          }}
        />
        <img
          src={getImgUrl(img2)}
          onClick={() => {
            addAbilityPoint("W");
          }}
        />
        <img
          src={getImgUrl(img3)}
          onClick={() => {
            addAbilityPoint("E");
          }}
        />
        <img
          src={getImgUrl(img4)}
          onClick={() => {
            addAbilityPoint("R");
          }}
        />
      </div>
      <div className="level-order">
        <AbilityRow abilityOrder={qOrder} bind="Q" />
        <AbilityRow abilityOrder={wOrder} bind="W" />
        <AbilityRow abilityOrder={eOrder} bind="E" />
        <AbilityRow abilityOrder={rOrder} bind="R" />
      </div>
    </div>
  );
};
export default LevelSection;
