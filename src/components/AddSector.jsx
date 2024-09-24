import { useEffect, useRef, useState } from "react";
import classes from "../styles/AddSector.module.css";
const AddSector = ({ handleSectionValue }) => {
  const [addSector, setAddSector] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [storeData, setStoreData] = useState([]); // array store here
  const inputRef = useRef(null);
  //keyboard shortcut key
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check for "Ctrl + K" key combination
      if (event.ctrlKey && event.key === "M") {
        event.preventDefault(); // Prevent the default browser action for "Ctrl + K"
        SectorAddHandler(); // Call the button click handler
      }
    };

    // Add the event listener to the window object
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  //stop re-rendering
  useEffect(() => {
    if (storeData.length > 0) {
      handleSectionValue(storeData);
    }
    // console.log(storeData);
  }, [handleSectionValue, storeData]);

  // Focus the input field when it is shown
  useEffect(() => {
    if (addSector && inputRef.current) {
      inputRef.current.focus(); // Focus the input field
    }
  }, [addSector]);

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

  //form submition
  const SubmitHandle = (e) => {
    e.preventDefault();
    setStoreData((prevData) => [
      ...prevData,
      { name: inputValue, allChildTasks: [] },
    ]);
    setInputValue(""); // Clear input after submission
    setAddSector(false);
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
          <div className={classes.addTaskTitleInputWraper}>
            <input
              type="text"
              value={inputValue}
              onChange={inputHandler}
              required
              ref={inputRef}
            />
          </div>
          <div className={classes.buttonWraper}>
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
