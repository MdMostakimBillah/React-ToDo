import classes from "../styles/SingleTask.module.css";
function SingleTask() {
  return (
    <>
      <li>
        <div className={classes.my_single_task}>
          <div>
            <span>Personal task number one</span>
          </div>
          <div className={classes.icon_editing_task}>
            <div className={classes.check_box_signle_task}>
              <input type="checkbox" />
              <span className={classes.checked}></span>
            </div>
            <span
              className={`${classes.Edit_Delete} material-symbols-outlined`}
            >
              {" "}
              edit_square{" "}
            </span>
            <span
              className={`${classes.Edit_Delete} material-symbols-outlined`}
            >
              {" "}
              delete{" "}
            </span>
          </div>
        </div>
      </li>
    </>
  );
}

export default SingleTask;
