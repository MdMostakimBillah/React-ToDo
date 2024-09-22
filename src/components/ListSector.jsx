import { useEffect, useState, useRef } from "react";
import classes from "../styles/ListSector.module.css";
const ListSector = ({ sectorList }) => {
  const [clickedItem, setClickedItem] = useState(null);
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState("");

  const boxRef = useRef(null);

  //storing the props data in a state
  useEffect(() => {
    if (sectorList && sectorList.length > 0) {
      setList(sectorList);
    }
  }, [sectorList]);

  //when click anywhere edit and delete button should be hide
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setClickedItem(null); // Hide if click outside
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boxRef]);

  //catch the index and store here edit and delete button show and hide
  const EditDeleteHandler = (Item) => {
    setClickedItem(clickedItem === Item ? null : Item);
  };

  //editing start
  const startEditing = (index, content) => {
    setEditingIndex(index === editingIndex ? null : index);
    setNewName(content);
  };

  //rename
  const handleRenem = (e) => {
    setNewName(e.target.value);
  };

  //save editing data
  const saveEdit = (index) => {
    console.log(index);
    const updatedList = list.map((item, i) =>
      i === index ? { ...item, name: newName } : item
    );
    setList(updatedList); //set updated value
    setEditingIndex(null); //remove the index
    setClickedItem(null); //hide the editing button
  };
  return (
    <div className={classes.listSectorWraper}>
      <ul>
        {/*this map for displying all item in nav*/}
        {list.map((item, index) => (
          <li key={index} value={item.name}>
            <span
              className={`material-symbols-outlined ${classes.toggleIcon}`}
              onClick={() => EditDeleteHandler(index)}
            >
              density_medium
            </span>{" "}
            {/*Editing here*/}
            {index === editingIndex ? (
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  saveEdit(index);
                }}
              >
                <input
                  className={classes.editingInputField}
                  value={newName}
                  onChange={handleRenem}
                  type="text"
                  autoFocus
                  onBlur={() => saveEdit(index)}
                />
              </form>
            ) : (
              <p>{item.name}</p>
            )}
            <div
              ref={boxRef}
              className={`${classes.Edit_Delete} ${
                clickedItem === index ? classes.show : ""
              }`}
            >
              <span
                className={`material-symbols-outlined ${classes.edit}`}
                onClick={() => startEditing(index, item.name)}
              >
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
