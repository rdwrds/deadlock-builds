import { useContext, useState } from "react";
import { CategoryContext } from "../CategoryContext";
import "./CategoryTitle.css";

const CategoryTitle = (cat) => {
  //the state isnt exactly necessary, but id rather not update the context 
  //(that BuildInfo page relies on) until the final value is submitted.
  const [title, setTitle] = useState(cat.title || "Untitled Category");

  const { categories, setCategories } = useContext(CategoryContext);

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateCategory = (category) => {
      return category.id === cat.id ? { ...category, title: title } : category;
    };

    setCategories((prevCategories) => prevCategories.map(updateCategory));
  };

  return (
    <form
      className="title-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className="category-title"
        type="text"
        name="category-title"
        placeholder="category title"
        id=""
        value={title}
        onChange={(e) => {
          handleChange(e);
        }}
        autoComplete="off"
      />
    </form>
  );
};
export default CategoryTitle;
