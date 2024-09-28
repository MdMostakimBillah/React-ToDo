import { useEffect, useState } from "react";
import classes from "../styles/TodoListOperation.module.css";
import SingleTask from "./SingleTask";
const TodoListOperation = ({ workingSector, sectorData, setSectorData }) => {
  //checking Selected Data available or not in whole array
  let selectedDataFilter =
    sectorData.filter((item) => item.value === workingSector.value) || [];

  // Set an empty object if not found
  const getSelectedDataFromLocalStorage =
    JSON.parse(localStorage.getItem("seletedSector")) || {};

  // If the object is not available in localStorage, set an initial default object
  if (
    !getSelectedDataFromLocalStorage ||
    Object.keys(getSelectedDataFromLocalStorage).length === 0
  ) {
    // Replace with your initial default object
    const initialData = { value: "No Sector Selected" };
    localStorage.setItem("seletedSector", JSON.stringify(initialData));
  }

  const [newInput, setNewInput] = useState("");
  // //input hander
  const inputHanlder = (e) => {
    setNewInput(e.target.value);
  };

  // //submit handlr
  const handleSumit = (e) => {
    e.preventDefault();
    const addTask = sectorData.map((item, intex) =>
      item.value === getSelectedDataFromLocalStorage.value
        ? { ...item, allChildTasks: [...item.allChildTasks, newInput] }
        : item
    );
    setSectorData(addTask);
    localStorage.setItem("storeData", JSON.stringify(addTask));
    setNewInput("");
  };

  return (
    <>
      <div className={classes.WraperListOperation}>
        <div className={classes.TaskList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">task_alt</span>
            <h3>Task List</h3>
          </div>
          <div className={classes.taskesWraper}>
            {sectorData.map((item) =>
              item.value === getSelectedDataFromLocalStorage.value
                ? item.allChildTasks.map((task, i) => (
                    <SingleTask task={task} key={i} index={i} />
                  ))
                : ""
            )}
          </div>
        </div>
        <div className={classes.ProcessingList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">
              running_with_errors
            </span>
            <h3>Processing</h3>
          </div>
          <div className={classes.taskesWraper}>{/* <SingleTask /> */}</div>
        </div>
        <div className={classes.CompleteList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">beenhere</span>
            <h3>Complete</h3>
          </div>
          <div className={classes.taskesWraper}></div>
        </div>
        <div className={classes.Delete}>
          {/* <div className={classes.topTitle}>
            <span className="material-symbols-outlined">delete</span>
            <h3>Delete</h3>
          </div> */}
          {/*delete box */}
          <div className={classes.deleteBox}>
            <span className="material-symbols-outlined">delete</span>
          </div>
        </div>
        {}
      </div>

      {/*adding data input*/}
      <div className={classes.taskAddInput}>
        <form action="" onSubmit={handleSumit}>
          <div className={classes.wraperAddTask}>
            <div className={classes.inputField}>
              <input
                type="text"
                placeholder="Add Task"
                value={newInput}
                onChange={inputHanlder}
                disabled={
                  selectedDataFilter[0]
                    ? false
                    : getSelectedDataFromLocalStorage.value
                    ? false
                    : true
                }
                required
                autoFocus={selectedDataFilter[0] ? true : false}
              />
            </div>
            <div className={classes.actionButton}>
              <button type="submit" className={classes.addTaskBtn}>
                <span className="material-symbols-outlined">send</span>
              </button>
              <div className={classes.selectedSection}>
                <p>
                  {selectedDataFilter && getSelectedDataFromLocalStorage.value
                    ? getSelectedDataFromLocalStorage.value
                    : "No Sector Selected"}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoListOperation;
