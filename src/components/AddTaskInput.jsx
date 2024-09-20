import { useContext } from "react";
import classes from "../styles/AddTaskInput.module.css";
import { TaskContext } from "../context/TaskListContext";
function AddTaskInput() {
  const ContextValue = useContext(TaskContext);
  return (
    <>
      <form action="" onSubmit={ContextValue.FormSubmit}>
        <div className={classes.input_filed}>
          <div className={classes.input_box}>
            <input
              type="text"
              value={
                ContextValue.editingItem
                  ? ContextValue.editingItem
                  : ContextValue.inputValue
              }
              onChange={ContextValue.HanldeInput}
              placeholder="What is the next task ?"
            />
          </div>
          <div className={classes.input_icon}>
            <span className="material-symbols-outlined"> timer </span>
            <span className="material-symbols-outlined"> note_add </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTaskInput;
