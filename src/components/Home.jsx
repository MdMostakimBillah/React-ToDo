import { useState } from "react";
import classes from "../styles/Home.module.css";
import Navigation from "./Navigation";
import TodoListOperation from "./TodoListOperation";
const Home = () => {
  //get selected sector in this state variable
  const [sectore, setSector] = useState([]);
  const [sectoreIndex, setSectorIndex] = useState();

  const [list, setList] = useState([]);
  //selected sectior store in state variable function
  const selectedSector = (item, index) => {
    setSector(item);
    setSectorIndex(index);
  };

  const listStore = (item) => {
    setList(item);
  };

  return (
    <div className={classes.container}>
      <Navigation SectorHanlder={selectedSector} listStore={listStore} />
      <TodoListOperation
        workingSector={sectore}
        sectoreIndex={sectoreIndex}
        listData={list}
      />
    </div>
  );
};

export default Home;
