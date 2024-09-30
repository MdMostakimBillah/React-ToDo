import { useEffect, useState } from "react";
import classes from "../styles/SingleTask.module.css";

const SingleTask = ({
  status,
  task,
  index,
  workingSector,
  sectorData,
  setSectorData,
  setActiveCard,
}) => {
  const [taskEditingField, setTaskEditingField] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleTextArea = (e) => {
    setTaskEditingField(e.target.value);
  };

  const editTaskHandler = (value, i) => {
    setEditingIndex(i === editingIndex ? null : i);
    setTaskEditingField(value);
  };

  const deleteTaskHandler = () => {
    //sector data finding here
    const deleteTaskOperation = sectorData.map((item, i) => {
      // sector data here in item
      if (item.value === workingSector.value) {
        //filter the data and out the deleted task throuh the index
        const updatedTask = item.allChildTasks.filter((_, i) => i !== index);
        return { ...item, allChildTasks: updatedTask };
      }
      return item; //Return other sectors unchanged
    });
    setSectorData(deleteTaskOperation);
    localStorage.setItem("storeData", JSON.stringify(deleteTaskOperation));
  };

  const saveEdit = (index) => {
    const updatedData = sectorData.map((item) => {
      if (item.value === workingSector.value) {
        const updatedTasks = item.allChildTasks.map((t, i) =>
          i === index ? taskEditingField : t
        );
        return { ...item, allChildTasks: updatedTasks };
      }
      return item;
    });
    setSectorData(updatedData);
    localStorage.setItem("storeData", JSON.stringify(updatedData));
    setEditingIndex(null);
  };

  //draging functionality

  return (
    <div
      className={classes.singleTask}
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className={classes.taskcontrolBar}>
        <div className={classes.dragingIconWraper}>
          <span className="material-symbols-outlined">drag_indicator</span>
        </div>
        <div className={classes.removeAndEditWraper}>
          <span
            className="material-symbols-outlined"
            onClick={() => editTaskHandler(task, index)}
          >
            edit_square
          </span>
          <span
            className="material-symbols-outlined"
            onClick={deleteTaskHandler}
          >
            close
          </span>
        </div>
      </div>
      <div className={classes.notes}>
        {index === editingIndex ? (
          <form action="" className={classes.TaskEditor}>
            <textarea
              value={taskEditingField}
              onChange={handleTextArea}
              autoFocus
              required
              onBlur={() => saveEdit(index)}
            ></textarea>
          </form>
        ) : (
          <p>{task}</p>
        )}
      </div>
    </div>
  );
};

export default SingleTask;
