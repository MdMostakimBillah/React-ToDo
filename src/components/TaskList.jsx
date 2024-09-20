import classes from "../styles/TaskList.module.css";
import SingleTask from "./SingleTask";
import { TaskContext } from "../context/TaskListContext";
import { useContext } from "react";
function TaskList({editingHandler}) {
  const ContextValue = useContext(TaskContext);
  return (
    <>
      <div className={classes.task_list_area}>
        <ul>
          {ContextValue.arrayList.map((item, index) => (
            <SingleTask
              value={item}
              key={index}
              uniqId={index}
              contextAllData={ContextValue}
              editingHandler={editingHandler}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
