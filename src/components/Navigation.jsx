import { useState, useEffect } from "react";
import classes from "../styles/Navigation.module.css";
import AddSector from "./AddSector";
import ListSector from "./ListSector";
const Navigation = () => {
  const [section, setSection] = useState([]);
  const handleSectionValue = (value) => {
    setSection(value);
  };
  const [showTaskTitle, setShowTaskTitle] = useState(() => {
    const toggleNav = localStorage.getItem("toggle");
    return toggleNav ? JSON.parse(toggleNav) : true;
  });
  const ToggleTaskTitle = () => {
    setShowTaskTitle(!showTaskTitle);
  };
  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(showTaskTitle));
  }, [showTaskTitle]);
  return (
    <div
      className={`${classes.navigationWraper} ${
        showTaskTitle ? classes.showNavBox : classes.hideNavBox
      }`}
    >
      <div className={classes.navTitle}>
        <h3>ToDo</h3>
        <h3>Note</h3>
      </div>
      <div className={classes.activeAction}></div>

      <AddSector handleSectionValue={handleSectionValue} />

      <ListSector sectorList={section} />

      <div className={classes.toggleSliderArrow} onClick={ToggleTaskTitle}>
        <span
          className={`material-symbols-outlined ${
            showTaskTitle ? classes.rotetIcon : ""
          }`}
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};

export default Navigation;
