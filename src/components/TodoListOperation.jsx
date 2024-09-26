import { useEffect, useState } from "react";
import classes from "../styles/TodoListOperation.module.css";
import SingleTask from "./SingleTask";
const TodoListOperation = ({ workingSector, sectoreIndex, listData }) => {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("db");
    return savedList ? JSON.parse(savedList) : listData;
  });
  const [sector, setSector] = useState(() => {
    const sotoredData = localStorage.getItem("seleteSector");
    return sotoredData ? JSON.parse(sotoredData) : [];
  });
  const [sectorIndex, setSectorIndex] = useState();
  const [newInput, setNewInput] = useState("");

  //checking the clicked value is available in whole array or note
  const clickedData = list.filter((title) => title.name === sector.name);
  const showingClickdata = clickedData.map((item) => item)[0];

  //input hander
  const inputHanlder = (e) => {
    setNewInput(e.target.value);
  };

  //submit handlr
  const handleSumit = (e) => {
    e.preventDefault();
    const updated = list.map((item) =>
      item.name === sector.name
        ? { ...item, allChildTasks: [...item.allChildTasks, newInput] }
        : item
    );

    setList(updated); //here adding and updating my data and add some inpur in array but how to store it local storage when i refresh the page the data will remove
    setNewInput("");
  };

  //update list
  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(list));
  }, [list]);

  // Set list data in state on initial mount
  // useEffect(() => {
  //   if (listData && list.length === 0) {
  //     setList(listData);
  //   }
  // }, [listData]);

  // set list data in a state
  useEffect(() => {
    setList(listData);
  }, [listData]);

  //index selected sector
  useEffect(() => {
    setSectorIndex(sectoreIndex);
  }, [sectoreIndex]);

  //data store this variable state
  useEffect(() => {
    if (workingSector && Object.keys(workingSector).length > 0) {
      setSector(workingSector);
    }
  }, [workingSector]);

  //store data in local storage
  useEffect(() => {
    localStorage.setItem("seleteSector", JSON.stringify(sector));
  }, [sector]);

  return (
    <>
      <div className={classes.WraperListOperation}>
        <div className={classes.TaskList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">task_alt</span>
            <h3>Task List</h3>
          </div>
          <div className={classes.taskesWraper}>
            {list.map((item, index) =>
              item.name === sector.name
                ? item.allChildTasks.map((task, i) => (
                    <SingleTask task={task} key={i} />
                  ))
                : ""
            )}

            {/* <SingleTask />
            <SingleTask /> */}
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
          <div className={classes.taskesWraper}>
            {/* <SingleTask />
            <SingleTask /> */}
          </div>
        </div>
        {/* <div className={classes.Delete}>
        <div className={classes.topTitle}>
          <span className="material-symbols-outlined">delete</span>
          <h3>Delete</h3>
        </div>
      </div> */}

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
                  disabled={showingClickdata && sector.name ? false : true}
                  required
                />
              </div>
              <div className={classes.actionButton}>
                <button type="submit" className={classes.addTaskBtn}>
                  <span className="material-symbols-outlined">send</span>
                </button>
                <div className={classes.selectedSection}>
                  <p>
                    {showingClickdata && sector.name
                      ? sector.name
                      : "No Sector Selected"}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/*delete box */}
      {/* <div className={classes.deleteBox}>
        <span className="material-symbols-outlined">delete</span>
      </div> */}
    </>
  );
};

export default TodoListOperation;
