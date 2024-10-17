export const colors = {
  textBackground: "#f0e1cb",
  defaultBackground: "#28271e",
  tanBackground: "#ccbda7",
  greyBackground: "#525659",
  soulsColor: "#5b8880",
  weapon500: "#e09b2f",
  weapon600: "#b37c26",
  weapon700: "#865d1c",
  spirit500: "#ce91fe",
  spirit600: "#a574cb",
  spirit700: "#7c5798",
  vitality500: "#84b430",
  vitality600: "#6a9026",
  vitality700: "#4f6c1d",
};

export const getCurrentStyle = (currentTab, shade) => {
  switch (currentTab) {
    case "weapon":
      return { backgroundColor: colors[`weapon${shade || 500}`] };
      break;
    case "spirit":
      return { backgroundColor: colors[`spirit${shade || 500}`] };
      break;
    case "vitality":
      return { backgroundColor: colors[`vitality${shade || 500}`] };
      break;
    default:
      return { backgroundColor: colors.greyBackground };
      break;
  }
};
