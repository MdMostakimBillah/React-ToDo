import { useState } from "react";
import classes from "../styles/DropingArea.module.css";

const DropingArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      className={showDrop ? classes.droping_area : classes.hide_area}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    ></div>
  );
};

export default DropingArea;
