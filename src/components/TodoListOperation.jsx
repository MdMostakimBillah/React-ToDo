import { useState } from "react";
import classes from "../styles/TodoListOperation.module.css";
import TaskColumn from "./TaskColumn";
const TodoListOperation = ({ workingSector, sectorData, setSectorData }) => {

  const [activeCard, setActiveCard] = useState(null);

  const [inputNote, setInputNote] = useState(false);

  const focusTextArea = () => {
    setInputNote(true);
  };
  const closeBox = () => {
    setInputNote(false);
  };
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
    setInputNote(false);
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
    const workingSector = JSON.parse(localStorage.getItem("seletedSector"));
    const taskToMove = sectorData.filter(
      (item) => item.value === workingSector.value
    )[0].allChildTasks;

    // if(taskToMove.allChildTasks){

    // }
    const updatedTask = taskToMove.filter((_, i) => i !== activeCard);
    updatedTask.splice(possition, 0, {
      ...taskToMove,
      status: status,
    });

    // console.log(taskToMove);
    // console.log(status);
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
          // status="Task List"
        />

        {/*adding data input*/}
        <div
          className={`${classes.taskAddInput} ${
            inputNote ? classes.focusNotePade : " "
          }`}
        >
          <form action="" onSubmit={handleSumit}>
            <div
              className={`${classes.wraperAddTask} ${
                inputNote ? classes.WraperInputArea : " "
              }`}
            >
              <div
                className={`${classes.inputField} ${
                  inputNote ? classes.textAreaBox : " "
                }`}
              >
                <textarea
                  type="text"
                  value={newInput}
                  placeholder="Write here"
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
                  onFocus={focusTextArea}
                ></textarea>
              </div>
              <div
                className={`${classes.actionButton} ${
                  inputNote ? classes.actionBtn : ""
                }`}
              >
                <button type="submit" className={classes.addTaskBtn}>
                  <span className="material-symbols-outlined">send</span>
                </button>

                {inputNote ? (
                  <button className={classes.addTaskBtn} type="button">
                    <span
                      onClick={closeBox}
                      className="material-symbols-outlined"
                    >
                      close_fullscreen
                    </span>
                  </button>
                ) : (
                  ""
                )}

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
      </div>

      {/* delete box */}
      {/* <div className={classes.deleteSmallBox}>
        <span className="material-symbols-outlined">delete</span>
      </div> */}
    </>
  );
};

export default TodoListOperation;
