import classes from "../styles/CategoryHeader.module.css";
function CategoryHeader() {
  return (
    <>
      <div className={classes.category_header}>
        <div className={classes.calender_icon}>
          <span className="material-symbols-outlined"> calendar_today </span>
        </div>
        <div>
          <span className={classes.task_title_category}>Today tasks</span>
        </div>
      </div>
    </>
  );
}

export default CategoryHeader;
