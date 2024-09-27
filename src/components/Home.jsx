import { useState } from "react";
import classes from "../styles/Home.module.css";
import Navigation from "./Navigation";
import TodoListOperation from "./TodoListOperation";
const Home = () => {
  //get selected sector in this state variable
  const [sectore, setSector] = useState([]);

  //all data here which is store in local storage
  const [data, setData] = useState([]);
  const [dataHanlder, setDataHandler] = useState(null);

  //selected sectior store in state variable function
  const selectedSector = (item) => {
    setSector(item);
  };

  const dataHandler = (section, sectionHanlder) => {
    setData(section);
    setDataHandler(() => sectionHanlder);
  };

  return (
    <div className={classes.container}>
      {/* <Navigation SectorHanlder={selectedSector} listStore={listStore} /> */}
      <Navigation SectorHanlder={selectedSector} dataHandler={dataHandler} />
      <TodoListOperation
        workingSector={sectore}
        sectorData={data}
        setSectorData={dataHanlder}
      />
    </div>
  );
};

export default Home;
