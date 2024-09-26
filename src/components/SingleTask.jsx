import classes from "../styles/SingleTask.module.css";

const SingleTask = ({ task }) => {
  return (
    <div className={classes.singleTask}>
      <div className={classes.taskcontrolBar}>
        <div className={classes.dragingIconWraper}>
          <span className="material-symbols-outlined">drag_indicator</span>
        </div>
        <div className={classes.removeAndEditWraper}>
          <span className="material-symbols-outlined">edit_square</span>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
      <div className={classes.notes}>
        <p>{task}</p>
      </div>
    </div>
  );
};

export default SingleTask;
