export const colors = {
    textBackground: "#f0e1cb",
    defaultBackground: "#28271e",
    tanBackground: "#ccbda7",
    greyBackground: "#525659",
    soulsColor: "#5b8880",
    weaponColor: "#e09b2f",
    spiritColor: "#ce91fe",
    vitalityColor: "#84b430",
  };

export const getCurrentStyle = (currentTab) => {
    switch (currentTab) {
      case "weapon":
        return {backgroundColor: colors.weaponColor};
        break;
      case "spirit":
        return {backgroundColor: colors.spiritColor};
        break;
      case "vitality":
        return {backgroundColor: colors.vitalityColor};
        break;
      default:
        return {backgroundColor: colors.weaponColor};
        break;
    }
  }