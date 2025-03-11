import { useContext } from "react";
import { CategoryContext } from "../CategoryContext";
import "./CloseButton.css";

const CloseButton = (category) => {
  const { id } = category;
  const { categories, setCategories, currentCategory, setCurrentCategory } =
    useContext(CategoryContext);

  const onClick = () => {
    const removedCategories = categories.filter((category) => category.id != id);

    //reindex categories- should probably be done
    //in BuildInfo component.
    const reindexedArray = removedCategories.filter((cat, index) => {
      cat["id"] = index;
      return cat;
    })

    console.log(currentCategory.id === id);

    if (currentCategory.id === id) {
      setCurrentCategory(null);
    }

    setCategories([...reindexedArray]);
    console.log("CLICKIN DA BUTTON!");

  };

  return (
    <button className="close-button" type="button" onClick={onClick}>
      X
    </button>
  );
};
export default CloseButton;
