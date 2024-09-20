import { useState } from "react";
import classes from "../styles/TaskContainer.module.css";
import StikySection from "./StikySection";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskListContext";

function TaskContainer() {
  const [inputValue, setInputValue] = useState("");
  const [arrayList, setArrayList] = useState([]);
  const [editingItem, setEditingItem] = useState("");

  const HanldeInput = (e) => {
    setInputValue(e.target.value);
    setEditingItem(e.target.value);
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    setArrayList([...arrayList, inputValue]);
    setInputValue("");
    setEditingItem("");
  };

  //editingHandler funciton
  const editingHandler = (value, index) => {
    setEditingItem(value);

    const updateArray = arrayList.map((item, i) =>
      //array item index and clicked item index checking
      i === index ? inputValue : item
    );
    //demove emplty string in array
    const filteredArray = updateArray.filter((item) => item != "");
    setArrayList(filteredArray);
  };
  return (
    <>
      <div className={classes.task_container}>
        <TaskContext.Provider
          value={{
            HanldeInput: HanldeInput,
            FormSubmit: FormSubmit,
            inputValue: inputValue,
            arrayList: arrayList,
            setArrayList: setArrayList,
            editingItem: editingItem,
          }}
        >
          <StikySection />
          <TaskList editingHandler={editingHandler} />
        </TaskContext.Provider>
      </div>
    </>
  );
}

export default TaskContainer;
