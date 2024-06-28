import classes from "../styles/ActiveTaskTitle.module.css";
function ActiveTaskTitle() {
  return (
    <>
      <div className={classes.active_title_header}>
        <span className={classes.title_active}>
          Presonal
          <span className={classes.active_indecator}></span>
        </span>
      </div>
    </>
  );
}

export default ActiveTaskTitle;
