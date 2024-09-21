import { useState } from "react";
import classes from "../styles/AddSector.module.css";
const AddSector = ({ handleSectionValue }) => {
  const [addSector, setAddSector] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [storeData, setStoreData] = useState([]);

  //show input box
  const SectorAddHandler = () => {
    setAddSector(true);
  };

  //hide input box
  const CancleToggle = () => {
    setAddSector(false);
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  //for submition
  const SubmitHandle = (e) => {
    e.preventDefault();
    setStoreData([...storeData, inputValue]);
    setInputValue("");
  };
  return (
    <>
      <div className={classes.addTaskTitle} onClick={SectorAddHandler}>
        <p>Add Sector</p>
      </div>

      <div
        className={`${classes.addTaskTitleField} ${
          addSector ? classes.show : ""
        }`}
      >
        <form action="" onSubmit={SubmitHandle}>
          <input
            type="text"
            value={inputValue}
            onChange={inputHandler}
            required
          />
          <div>
            <button className={classes.cancel} onClick={CancleToggle}>
              Cancel
            </button>
            <button className={classes.addSector} type="submit">
              Add Sector
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSector;
