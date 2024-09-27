import { useEffect, useState } from "react";
import classes from "../styles/TodoListOperation.module.css";
import SingleTask from "./SingleTask";
const TodoListOperation = ({ workingSector, sectorData, setSectorData }) => {
  //checking Selected Data available or not in whole array
  const selectedDataFilter = sectorData.filter(
    (item) => item.value === workingSector.value
  );

  // const getSelectedDataFromLocalStorage = JSON.parse(
  //   localStorage.getItem("seletedSector")
  // );

  const getSelectedDataFromLocalStorage =
    JSON.parse(localStorage.getItem("seletedSector")) || {}; // Set an empty object if not found

  // If the object is not available in localStorage, set an initial default object
  if (
    !getSelectedDataFromLocalStorage ||
    Object.keys(getSelectedDataFromLocalStorage).length === 0
  ) {
    const initialData = { value: "No Sector Selected" }; // Replace with your initial default object
    localStorage.setItem("seletedSector", JSON.stringify(initialData));
  }

  // console.log(sectorData);

  // const [data, setData] = useLocalStorage("selectedData");
  // // filter the clicked sector
  // const selectedSector = sector.filter(
  //   (item) => item.value === workingSector.value
  // );
  //store the selected data in local storage
  // useEffect(() => {
  //   localStorage.setItem("selectedData", JSON.stringify(selectedSector));
  // }, [selectedSector]);
  // console.log(selectedSector);

  // const [list, setList] = useState(() => {

  //   //all list data is here
  //   const savedList = localStorage.getItem("myData");
  //   return savedList ? JSON.parse(savedList) : null;
  // });

  // const [sector, setSector] = useState(() => {
  //   const sotoredData = localStorage.getItem("seleteSector");
  //   return sotoredData ? JSON.parse(sotoredData) : [];
  // });
  // const [sectorIndex, setSectorIndex] = useState();

  const [newInput, setNewInput] = useState("");
  // //input hander
  const inputHanlder = (e) => {
    setNewInput(e.target.value);
  };

  //checking the clicked value is available in whole array or note
  // const clickedData = list.filter((title) => title.name === sector.name);
  // const showingClickdata = clickedData.map((item) => item)[0];

  // console.log(list);

  //list update
  // useEffect(() => {
  //   setList(listData);
  // }, [listData]);

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

  //update list
  // useEffect(() => {
  //   localStorage.setItem("db", JSON.stringify(list));
  // }, [list]);

  // Set list data in state on initial mount
  // useEffect(() => {
  //   if (listData && list.length === 0) {
  //     setList(listData);
  //   }
  // }, [listData, list]);

  // set list data in a state
  // useEffect(() => {
  //   setList(listData);
  // }, [listData]);

  // useEffect(() => {
  //   const savedList = localStorage.getItem("db");
  //   if (savedList) {
  //     setList(JSON.parse(savedList));
  //   }
  // }, []);

  // //index selected sector
  // useEffect(() => {
  //   setSectorIndex(sectoreIndex);
  // }, [sectoreIndex]);

  // //data store this variable state
  // useEffect(() => {
  //   if (workingSector && Object.keys(workingSector).length > 0) {
  //     setSector(workingSector);
  //   }
  // }, [workingSector]);

  // //store data in local storage
  // useEffect(() => {
  //   localStorage.setItem("seleteSector", JSON.stringify(sector));
  // }, [sector]);

  return (
    <>
      <div className={classes.WraperListOperation}>
        <div className={classes.TaskList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">task_alt</span>
            <h3>Task List</h3>
          </div>
          <div className={classes.taskesWraper}>
            {sectorData.map((item, index) =>
              item.value === getSelectedDataFromLocalStorage.value
                ? item.allChildTasks.map((task, i) => (
                    <SingleTask task={task} key={i} />
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
                  disabled={
                    selectedDataFilter && getSelectedDataFromLocalStorage.value
                      ? false
                      : true
                  }
                  required
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
      </div>

      {/*delete box */}
      {/* <div className={classes.deleteBox}>
        <span className="material-symbols-outlined">delete</span>
      </div> */}
    </>
  );
};

export default TodoListOperation;
