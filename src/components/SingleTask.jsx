import { useState } from "react";
import classes from "../styles/SingleTask.module.css";
function SingleTask({ value, uniqId, contextAllData, editingHandler }) {
  // const [editingtValue, setEditingValue] = useState("");

  const [isComplete, setIsComplete] = useState(false);
  const CompleteTask = () => {
    setIsComplete(!isComplete);
  };

  const item = contextAllData.arrayList; //full array
  const setItem = contextAllData.setArrayList; // array setter function

  //deleted function
  const DeleteHandler = (index) => {
    // find the clicked item of array
    setItem(item.filter((_, i) => i != index));
  };

  //edit function
  const EditHandler = (index) => {
    const clickingEditItem = item.filter((_, i) => i === index)[0];
    editingHandler(clickingEditItem, index);
  };

  return (
    <>
      <li key={uniqId}>
        <div className={classes.my_single_task}>
          <div>
            <span>{isComplete ? <del> {value} </del> : value}</span>
          </div>
          <div className={classes.icon_editing_task}>
            <div className={classes.check_box_signle_task}>
              <input type="checkbox" onClick={CompleteTask} />
              <span className={classes.checked}></span>
            </div>
            <span
              className={`${classes.Edit_Delete} material-symbols-outlined`}
              onClick={() => EditHandler(uniqId)}
            >
              {" "}
              edit_square{" "}
            </span>
            <span
              className={`${classes.Edit_Delete} material-symbols-outlined`}
              onClick={() => DeleteHandler(uniqId)}
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
