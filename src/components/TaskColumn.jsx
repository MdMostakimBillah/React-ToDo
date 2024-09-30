import React from "react";
import classes from "../styles/TodoListOperation.module.css";
import SingleTask from "./SingleTask";
import DropingArea from "./DropingArea";
const TaskColumn = ({
  sectorData,
  getSelectedDataFromLocalStorage,
  setSectorData,
  onDrop,
  setActiveCard,
  status,
}) => {
  return (
    <div className={classes.TaskList}>
      <div className={classes.topTitle}>
        <span className="material-symbols-outlined">task_alt</span>
        <h3>{status}</h3>
      </div>
      <div className={classes.taskesWraper}>
        <DropingArea onDrop={() => onDrop(status, 0)} />
        {status === "Task List"
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
                        // onDrop={onDrop}
                      />
                      <DropingArea onDrop={() => onDrop(status, i + 1)} />
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
                        // onDrop={onDrop}
                      />
                      <DropingArea onDrop={onDrop} />
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
                        // onDrop={onDrop}
                      />
                      <DropingArea onDrop={onDrop} />
                    </React.Fragment>
                  ))
                : ""
            )
          : null}
      </div>
    </div>
  );
};

export default TaskColumn;
