import { useState } from "react";
import classes from "../styles/Navigation.module.css";
import AddSector from "./AddSector";
import ListSector from "./ListSector";
const Navigation = () => {
  const [section, setSection] = useState([]);
  const handleSectionValue = (value) => {
    setSection(value);
  };
  return (
    <div className={classes.navigationWraper}>
      <div className={classes.navTitle}>
        <h3>ToDo</h3>
        <h3>Note</h3>
      </div>
      <div className={classes.activeAction}></div>

      <AddSector handleSectionValue={handleSectionValue} />

      <ListSector sectorList={section} />
    </div>
  );
};

export default Navigation;
