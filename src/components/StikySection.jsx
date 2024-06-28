import classes from "../styles/StikySection.module.css";
import ActiveTaskTitle from "./ActiveTaskTitle";
import AddTaskInput from "./AddTaskInput";
function StikySection() {
  return (
    <>
      <div className={classes.sticky_div}>
        <ActiveTaskTitle />
        <AddTaskInput />
      </div>
    </>
  );
}

export default StikySection;
