import { useState } from "react";
import classes from "../styles/Navigation.module.css";
import AddSector from "./AddSector";
const Navigation = () => {
  const [section, setSection] = useState([]);
  const handleSectionValue = (value) => {
    setSection(value);
    console.log(section);
  };

  return (
    <div className={classes.navigationWraper}>
      <div className={classes.navTitle}>
        <h3>ToDo</h3>
        <h3>Note</h3>
      </div>
      <div className={classes.activeAction}></div>

      <AddSector handleSectionValue={handleSectionValue} />
    </div>
  );
};

export default Navigation;
