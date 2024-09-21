import classes from "../styles/Navigation.module.css";
import AddSector from "./AddSector";
const Navigation = () => {
  return (
    <div className={classes.navigationWraper}>
      <div className={classes.navTitle}>
        <h3>ToDo</h3>
        <h3>Note</h3>
      </div>
      <div className={classes.activeAction}></div>

      <AddSector />
    </div>
  );
};

export default Navigation;
