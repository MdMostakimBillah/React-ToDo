import classes from "../styles/CategoryList.module.css";
// import AddButton from "./AddButton";
import SingleCategory from "./SingleCategory";
function CategoryList() {
  return (
    <>
      <div className={classes.task_category_list}>
        <SingleCategory value="Personal" />
        <SingleCategory value="Freelancing" />
        <SingleCategory value="Collage" />
        <SingleCategory value="Work" />
        {/* <AddButton /> */}
      </div>
    </>
  );
}

export default CategoryList;
