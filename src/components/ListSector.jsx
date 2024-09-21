import { useState } from "react";
import classes from "../styles/ListSector.module.css";
const ListSector = ({ sectorList }) => {
  const [editDelete, setEditDelete] = useState(false);
  const EditDeleteHandler = () => {
    setEditDelete(!editDelete);
  };
  return (
    <div className={classes.listSectorWraper}>
      <ul>
        {sectorList.map((item, index) => (
          <li key={index} value={item}>
            <span
              className={`material-symbols-outlined ${classes.toggleIcon}`}
              onClick={EditDeleteHandler}
            >
              density_medium
            </span>{" "}
            <p>{item}</p>
            <div
              className={`${classes.Edit_Delete} ${
                editDelete ? classes.show : ""
              }`}
            >
              <span className={`material-symbols-outlined ${classes.edit}`}>
                edit_square
              </span>

              <span className={`material-symbols-outlined ${classes.delete}`}>
                delete
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSector;
