import classes from "../styles/TaskList.module.css";
import SingleTask from "./SingleTask";
function TaskList() {
  return (
    <>
      <div className={classes.task_list_area}>
        <ul>
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </ul>
      </div>
    </>
  );
}

export default TaskList;
