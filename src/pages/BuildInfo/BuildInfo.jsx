import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import {
  Item,
  CategoryTitle,
  CloseButton,
  LevelSection,
  BuildSharer,
  CategoryContext,
  TabContext,
} from "../../components";
import "./BuildInfo.css";
import ReactGridLayout, { WidthProvider } from "react-grid-layout";
import "/node_modules/react-resizable/css/styles.css";
import "/node_modules/react-grid-layout/css/styles.css";

const BuildInfo = () => {
  const {
    categories,
    setCategories,
    currentCategory,
    setCurrentCategory,
    layout,
    setLayout,
  } = useContext(CategoryContext);

  const { currentBuild, setCurrentBuild } = useContext(TabContext);

  //max title: 25
  const [title, setTitle] = useState(currentBuild["build"]["title"] || "");
  //max desc: 500
  const [description, setDescription] = useState(
    currentBuild["build"]["description"] || ""
  );

  console.log(currentBuild);

  const dialogRef = useRef(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const GridLayout = WidthProvider(ReactGridLayout);

  const height = 20;
  const rows = 4;
  const cols = 11;

  //showModal needed for backdrop
  useEffect(() => {
    //open the modal when the component is rendered
    //component is only rendered when path gone to by router
    dialogRef.current.showModal();
  }, []);

  const onClose = () => {
    navigate(-1);
  };

  const totalArea = rows * cols;

  const buildAreaTotal = () => {
    if (layout.length == 0) return 0;

    let sumArea = 0;
    layout.map((category) => {
      sumArea += category.w * category.h;
    });
    return sumArea;
  };

  const addCategory = () => {
    if (totalArea - buildAreaTotal() <= 0) {
      alert("you cannot add any more categories :)");
      return;
    }

    const emptyCategory = {
      id: categories.length,
      title: "",
      items: [],
    };

    setLayout((layouts) => [
      ...layouts,
      {
        i: `test${categories.length}`,
        x: 0,
        y: 0,
        w: 2,
        h: 1,
        maxH: 4,
        minH: 1,
        minW: 1,
        maxW: 10,
      },
    ]);

    setCategories([...categories, emptyCategory]);
  };

  const changeLayout = (newLayout) => {
    console.log(newLayout);
    console.log(layout);

    if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
      console.log("new layout detected");

      setLayout(newLayout); // Set the layout directly to avoid unnecessary renders
    }
  };

  const unselectCategory = () => {
    if (currentCategory) {
      setCurrentCategory(null);
    }
  };

  useEffect(() => {
    if (categories.length == 0) {
      setCurrentCategory(null);
    }
  }, [categories]);

  const adjustLayoutForNewItems = () => {
    console.log("adjusting layout");
    console.log(layout);
    console.log(categories);

    categories.map((cat) => {
      if (cat["items"].length) {
        let toChange = layout[cat["id"]];
        toChange["minW"] = cat["items"].length;
        console.log(layout[cat["id"]]);
      }
    });
  };

  //adjustLayoutForNewItems();

  return (
    <dialog
      className="build-info-dialog"
      ref={dialogRef}
      onClose={onClose}
      style={{}}
    >
      <div className="left-section">
        <div className="description-body">
          <h3 className="description-build-title">{title || "Build Title"}</h3>
          <form className="description-form">
            <TextareaAutosize
              name="description"
              placeholder="add a description"
              id=""
              className="description-input"
              maxRows="27"
              value={description}
              onChange={(e) => {
                const desc = e.target.value;
                const valid = desc.match(/^[\w\-\,\.\s]*$/);

                if (valid && desc.length < 500) {
                  setDescription(desc);
                }
              }}
            />
          </form>
          <button
            className="save-button"
            onClick={() => {
              setCurrentBuild({
                ...currentBuild,
                build: {
                  ...currentBuild.build,
                  description: description,
                },
              });
            }}
          >
            Save
          </button>
          <BuildSharer />
        </div>
        <LevelSection />
      </div>

      <div className="body-div">
        <div className="title-bar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("i be submittin dat hoe");

              setCurrentBuild({
                ...currentBuild,
                build: {
                  ...currentBuild.build,
                  title: title,
                },
              });
            }}
          >
            <input
              type="text"
              className="build-title"
              value={title}
              placeholder="Build Title"
              onChange={(e) => {
                e.preventDefault();

                const name = e.target.value;

                //alphanumeric
                if (name.match(/^[\w\-\,\.\s]*$/) && name.length <= 40) {
                  setTitle(name);
                }
              }}
            ></input>
          </form>
          <button className="category-button" onClick={addCategory}>
            Add Category
          </button>
        </div>
        <div className="build-info-body" onClick={unselectCategory}>
          <GridLayout
            className="build-layout"
            ref={gridRef}
            layout={layout}
            cols={cols}
            rows={rows}
            maxRows={rows}
            rowHeight={100}
            compactType={"horizontal"}
            preventCollision={false}
            onLayoutChange={changeLayout}
            margin={[25, 35]}
            useCSSTransforms={false}
            containerPadding={[10, 10]}
            //verticalCompact={false}
            //compactType="null"
          >
            {categories &&
              categories.map((cat, index) => {
                const testStyle = {
                  outline:
                    currentCategory === cat
                      ? "dotted 3px grey"
                      : "solid 1px grey",
                };

                return (
                  <div
                    key={`test${index}`}
                    className="build-subsection"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCategory(cat);
                    }}
                    style={testStyle}
                  >
                    <CategoryTitle {...cat} />
                    <CloseButton {...cat} />
                    {cat.items.map((item) => {
                      return <Item {...item} />;
                    })}
                  </div>
                );
              })}
          </GridLayout>
        </div>
      </div>
    </dialog>
  );
};
export default BuildInfo;
