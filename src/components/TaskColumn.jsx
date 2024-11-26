import React from "react";
import classes from "../styles/TodoListOperation.module.css";
import SingleTask from "./SingleTask";
import Masonry from "react-layout-masonry";
const TaskColumn = ({
  sectorData,
  getSelectedDataFromLocalStorage,
  setSectorData,
  setActiveCard,
  status,
}) => {
  return (
    <div className={classes.TaskList}>
      {/* <div className={classes.topTitle}> */}
      {/* <span className="material-symbols-outlined">task_alt</span> */}
      {/* <h3>{status}</h3> */}
      {/* </div> */}
      <div className={classes.taskesWraper}>
        <Masonry columns={{ 640: 2, 768: 3, 1024: 4 }} gap={10}>
          {sectorData.map((item) =>
            item.value === getSelectedDataFromLocalStorage.value
              ? item.allChildTasks.map((task, i) => (
                  <React.Fragment key={i}>
                    <div className="masonry-item">
                      <SingleTask
                        task={task}
                        index={i}
                        workingSector={getSelectedDataFromLocalStorage}
                        sectorData={sectorData}
                        setSectorData={setSectorData}
                        setActiveCard={setActiveCard}
                      />
                    </div>
                  </React.Fragment>
                ))
              : ""
          )}
        </Masonry>

        {/* {status === "Task List"
          ? sectorData.map((item) =>
              item.value === getSelectedDataFromLocalStorage.value
                ? item.allChildTasks.map((task, i) => (
                    <React.Fragment key={i}>
                      <SingleTask
                        task={task}
                        index={i}
                        workingSector={getSelectedDataFromLocalStorage}
                        sectorData={sectorData}
                        setSectorData={setSectorData}
                        setActiveCard={setActiveCard}
                      />
                      
                    </React.Fragment>
                  ))
                : ""
            )
          : status === "Processing"
          ? sectorData.map((item) =>
              item.value === getSelectedDataFromLocalStorage.value
                ? item.processing.map((task, i) => (
                    <React.Fragment key={i}>
                      <SingleTask
                        task={task}
                        index={i}
                        workingSector={getSelectedDataFromLocalStorage}
                        sectorData={sectorData}
                        setSectorData={setSectorData}
                        setActiveCard={setActiveCard}
                      />
                    </React.Fragment>
                  ))
                : ""
            )
          : status === "Complete"
          ? sectorData.map((item) =>
              item.value === getSelectedDataFromLocalStorage.value
                ? item.complete.map((task, i) => (
                    <React.Fragment key={i}>
                      <SingleTask
                        task={task}
                        index={i}
                        workingSector={getSelectedDataFromLocalStorage}
                        sectorData={sectorData}
                        setSectorData={setSectorData}
                        setActiveCard={setActiveCard}
                      />
                      
                    </React.Fragment>
                  ))
                : ""
            )
          : null} */}
      </div>
    </div>
  );
};

export default TaskColumn;
