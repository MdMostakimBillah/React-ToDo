import classes from "../styles/SingleCategory.module.css";
function SingleCategory({value}) {
  return (
    <>
      <div className={classes.listnumbers}>
        <a href="#">
          <div className={classes.bubble}></div>
          <div className={classes.listname}>
            <span>{value}</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default SingleCategory;
