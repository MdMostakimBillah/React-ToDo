import classes from "../styles/TaskContainer.module.css";
import StikySection from "./StikySection";
import TaskList from "./TaskList";
function TaskContainer() {
  return (
    <>
      <div className={classes.task_container}>
        <StikySection />
        <TaskList />
      </div>
    </>
  );
}

export default TaskContainer;
