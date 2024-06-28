import classes from "../styles/AddButton.module.css";
function AddButton() {
  return (
    <>
      {/* <!-- add task button  --> */}
      <div className={classes.addButton}>
        <span className="material-symbols-outlined"> add_circle </span>
        <span>Add new category</span>
      </div>
    </>
  );
}

export default AddButton;
