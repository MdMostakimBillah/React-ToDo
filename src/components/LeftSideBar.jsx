import classes from "../styles/LeftSideBar.module.css";
import Account from "./Account.jsx";
import TaskCategory from "./TaskCategory.jsx";
function LeftSideBar() {
  return (
    <div className={classes.side_list}>
      <Account />
      <TaskCategory />
    </div>
  );
}

export default LeftSideBar;
