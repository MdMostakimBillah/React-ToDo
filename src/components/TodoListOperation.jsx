import { useState } from "react";
import classes from "../styles/TodoListOperation.module.css";
import TaskColumn from "./TaskColumn";
const TodoListOperation = ({ workingSector, sectorData, setSectorData }) => {
  //three colom
  // const [todo, setTodo] = useState("Task List");
  //dragable card state
  const [activeCard, setActiveCard] = useState(null);
  // console.log(activeCard);

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
  //onDrag function
  const onDrop = (status, possition) => {
    if (activeCard === null || activeCard === undefined) return;
    console.log(
      `${activeCard} is going to place into ${status} and at the possition ${possition}`
    );
    // const taskToMove = sectorData[activeCard];
    // const updatedTask = sectorData.filter((item, i) => i !== activeCard);
    // updatedTask.splice(possition, 0, {
    //   ...taskToMove,
    //   status: status,
    // });
    const taskToMove = sectorData.map((item, index) => {
      const workingSector = JSON.parse(localStorage.getItem("seletedSector"));
      console.log(workingSector.value === item.value ? item.value : null);
      // console.log(item);
    });
  };

  return (
    <>
      <div className={classes.WraperListOperation}>
        <TaskColumn
          sectorData={sectorData}
          getSelectedDataFromLocalStorage={getSelectedDataFromLocalStorage}
          setSectorData={setSectorData}
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          status="Task List"
        />

        <TaskColumn
          sectorData={sectorData}
          getSelectedDataFromLocalStorage={getSelectedDataFromLocalStorage}
          setSectorData={setSectorData}
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          status="Processing"
        />

        <TaskColumn
          sectorData={sectorData}
          getSelectedDataFromLocalStorage={getSelectedDataFromLocalStorage}
          setSectorData={setSectorData}
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          status="Complete"
        />
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

      {/* delete box */}
      {/* <div className={classes.deleteSmallBox}>
        <span className="material-symbols-outlined">delete</span>
      </div> */}
    </>
  );
};

export default TodoListOperation;
