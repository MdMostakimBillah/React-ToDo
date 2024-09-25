import classes from "../styles/TodoListOperation.module.css";
import SingleTask from "./SingleTask";
const TodoListOperation = () => {
  return (
    <>
      <div className={classes.WraperListOperation}>
        <div className={classes.TaskList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">task_alt</span>
            <h3>Task List</h3>
          </div>
          <div className={classes.taskesWraper}>
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
          </div>
        </div>
        <div className={classes.ProcessingList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">
              running_with_errors
            </span>
            <h3>Processing</h3>
          </div>
          <div className={classes.taskesWraper}>
            <SingleTask />
            <SingleTask />
          </div>
        </div>
        <div className={classes.CompleteList}>
          <div className={classes.topTitle}>
            <span className="material-symbols-outlined">beenhere</span>
            <h3>Complete</h3>
          </div>
          <div className={classes.taskesWraper}>
            <SingleTask />
            <SingleTask />
            <SingleTask />

            <SingleTask />
          </div>
        </div>
        {/* <div className={classes.Delete}>
        <div className={classes.topTitle}>
          <span className="material-symbols-outlined">delete</span>
          <h3>Delete</h3>
        </div>
      </div> */}
      </div>
      {/*adding data input*/}
      <div className={classes.taskAddInput}>
        <form action="">
          <div className={classes.wraperAddTask}>
            <div className={classes.inputField}>
              <input type="text" placeholder="Add Task" />
            </div>
            <div className={classes.actionButton}>
              <button type="submit" className={classes.addTaskBtn}>
                <span className="material-symbols-outlined">add</span>
              </button>
              <div className={classes.selectedSection}>
                <p value="No Section Selected">No Section Selected</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/*delete box */}
      <div className={classes.deleteBox}>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </>
  );
};

export default TodoListOperation;
