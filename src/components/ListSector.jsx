import { useEffect, useState, useRef } from "react";
import classes from "../styles/ListSector.module.css";
// import useLocalStorage from "../Hooks/useLocalStorage";
const ListSector = ({ sectorList, setSectorList, recivedSelectedSector }) => {
  const [clickedItem, setClickedItem] = useState(null);

  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState("");

  const boxRef = useRef(null);

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

  const [editingContent, setEditingContent] = useState(""); //data which is editing
  // console.log(editingContent);

  //editing start
  const startEditing = (index, content) => {
    setEditingIndex(index === editingIndex ? null : index);
    setNewName(content);
    setEditingContent(content);
  };

  //rename
  const handleRenem = (e) => {
    setNewName(e.target.value);
  };

  //save editing data
  const saveEdit = (index) => {
    const updatedList = sectorList.map((item, i) =>
      i === index ? { ...item, value: newName } : item
    );
    //seleted data get here
    const seletData = JSON.parse(localStorage.getItem("seletedSector"));
    if (seletData.value === editingContent) {
      localStorage.setItem("seletedSector", JSON.stringify({ value: newName }));
    } else {
      console.log("other data changed");
    }

    setSectorList(updatedList); //set updated value
    localStorage.setItem("storeData", JSON.stringify(updatedList));
    setEditingIndex(null); //remove the index
    setClickedItem(null); //hide the editing button
  };

  //deleting data
  const DeleteFunction = (item, index) => {
    const updateList = sectorList.filter((_, i) => i !== index);

    //if selected item was deleted then this item should be empty
    const seletData = JSON.parse(localStorage.getItem("seletedSector"));
    if (seletData.name === item.name) {
      localStorage.setItem("seletedSector", JSON.stringify({ value: "" }));
    }
    setSectorList(updateList);
    localStorage.setItem("storeData", JSON.stringify(updateList));
  };

  //selectSector function
  const selectSector = (item, index) => {
    //store selected data first
    localStorage.setItem("seletedSector", JSON.stringify(item));
    //get this data from local storage
    const seletData = JSON.parse(localStorage.getItem("seletedSector"));

    // if (seletData.value === editingContent) {
    //   localStorage.setItem("seletedSector", JSON.stringify({ value: newName }));
    // }
    recivedSelectedSector(seletData);
    // console.log(seletData);
  };

  return (
    <div className={classes.listSectorWraper}>
      <ul>
        {/*this map for displying all item in nav*/}
        {sectorList.map((item, index) => (
          <li key={index} value={item.value}>
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
                  required
                  onBlur={() => saveEdit(index)}
                />
              </form>
            ) : (
              <p onClick={() => selectSector(item, index)}>{item.value}</p>
            )}
            <div
              ref={boxRef}
              className={`${classes.Edit_Delete} ${
                clickedItem === index ? classes.show : ""
              }`}
            >
              <span
                className={`material-symbols-outlined ${classes.edit}`}
                onClick={() => startEditing(index, item.value)}
              >
                edit_square
              </span>

              <span
                className={`material-symbols-outlined ${classes.delete}`}
                onClick={() => DeleteFunction(item, index)}
              >
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
