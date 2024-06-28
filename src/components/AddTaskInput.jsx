import classes from "../styles/AddTaskInput.module.css";
function AddTaskInput() {
  return (
    <>
      <div className={classes.input_filed}>
        <div className={classes.input_box}>
          <input type="text" placeholder="What is the next task ?" />
        </div>
        <div className={classes.input_icon}>
          <span className="material-symbols-outlined"> timer </span>
          <span className="material-symbols-outlined"> note_add </span>
        </div>
      </div>
    </>
  );
}

export default AddTaskInput;
