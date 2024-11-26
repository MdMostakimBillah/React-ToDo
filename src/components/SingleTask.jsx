import { useEffect, useState } from "react";
import classes from "../styles/SingleTask.module.css";
import { marked } from "marked";
import DOMPurify from "dompurify";
const SingleTask = ({
  task,
  index,
  workingSector,
  sectorData,
  setSectorData,
}) => {
  const [taskEditingField, setTaskEditingField] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const [editingStyle, setEditingStyle] = useState(false);

  const [readNote, setReadNote] = useState(false);
  const handleReadNote = () => {
    setReadNote(!readNote);
  };

  const handleTextArea = (e) => {
    setTaskEditingField(e.target.value);
  };

  // Convert Markdown to HTML
  const rawHtml = marked(task);

  // Sanitize the HTML to prevent XSS attacks
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);

  const editTaskHandler = (value, i) => {
    setEditingIndex(i === editingIndex ? null : i);
    setTaskEditingField(value);
    setEditingStyle(true);
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
    setEditingStyle(false);
  };

  //draging functionality
  return (
    <div
      className={`${classes.singleTask} ${readNote ? classes.ReadNote : ""}`}
    >
      <div className={classes.taskcontrolBar} onDoubleClick={handleReadNote}>
        <div className={classes.dragingIconWraper}>
          <span className="material-symbols-outlined">drag_indicator</span>
        </div>
        <div className={classes.removeAndEditWraper}>
          {readNote ? (
            <span
              onClick={handleReadNote}
              className={`material-symbols-outlined ${classes.minimizeRead}`}
            >
              close_fullscreen
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              onClick={() => editTaskHandler(task, index)}
            >
              edit_square
            </span>
          )}

          <span
            className="material-symbols-outlined"
            onClick={deleteTaskHandler}
          >
            close
          </span>
        </div>
      </div>
      <div
        className={`${classes.notes} ${
          editingStyle ? classes.popupEditingBox : ""
        }`}
      >
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
          <p
            className={`${classes.parent} ${classes.markdown_content}`}
            dangerouslySetInnerHTML={{
              __html: sanitizedHtml,
            }}
          ></p>
        )}
      </div>
    </div>
  );
};

export default SingleTask;
