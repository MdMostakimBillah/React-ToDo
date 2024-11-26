import { useState, useEffect } from "react";
import classes from "../styles/Navigation.module.css";
import AddSector from "./AddSector";
import ListSector from "./ListSector";
const Navigation = ({ SectorHanlder, dataHandler }) => {
  //data and set data storing here
  const [section, setSection] = useState([]);
  const [sectionHanlder, setSectionHanlder] = useState(null);
  const handleSectionValue = (data, setData) => {
    //main stored data and set data here
    setSection(data);
    setSectionHanlder(() => setData);
  };
  //toggle navigation bar
  const [showTaskTitle, setShowTaskTitle] = useState(() => {
    const toggleNav = localStorage.getItem("toggle");
    return toggleNav ? JSON.parse(toggleNav) : true;
  });
  //toggle operation
  const ToggleTaskTitle = () => {
    setShowTaskTitle(!showTaskTitle);
  };
  //toggle store in local storage
  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(showTaskTitle));
  }, [showTaskTitle]);

  //data recived and pass to parent selected sctor
  const HandleSecetredSector = (item) => {
    // console.log(item);

    SectorHanlder(item); // pass data to parent
  };

  // data pass to parent
  useEffect(() => {
    dataHandler(section, sectionHanlder);
  }, [dataHandler, section, sectionHanlder]);

  return (
    <div
      className={`${classes.navigationWraper} ${
        showTaskTitle ? classes.showNavBox : classes.hideNavBox
      }`}
    >
      <div className={classes.navTitle}>
        <h3>Note Book</h3>
        <h3></h3>
      </div>
      <div className={classes.activeAction}></div>

      <AddSector handleSectionValue={handleSectionValue} />
      {/* <AddSector /> */}

      <ListSector
        sectorList={section}
        setSectorList={sectionHanlder}
        recivedSelectedSector={HandleSecetredSector}
      />

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
