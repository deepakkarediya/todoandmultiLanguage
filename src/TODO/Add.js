import React, { useState } from "react";

function Add() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addData = () => {
    if (inputValue.trim() === "") {
      return "nothing to show";
    }

    if (editIndex !== null) {
      // Update operation
      const updatedData = [...data];
      console.log(updatedData);
      updatedData[editIndex] = inputValue;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Create operation
      setData([...data, inputValue]);
    }

    setInputValue("");
  };
  const editData = (index) => {
    // Set the input value to the item being edited and track its index
    setInputValue(data[index]);
    setEditIndex(index);
  };
  const deleteItem = (index) => {
    const updatedData = data.filter((element, i) => i !== index);
    setData(updatedData);
  };

  return (
    <>
      <div>
        <h2>CRUD OPERATION</h2>
        ADD ITEM
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addData}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ol>
        {data.map((item, index) => (
          <>
            <li key={index}>
              <h4>{item}</h4>

              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => editData(index)}>Edit</button>
            </li>
          </>
        ))}
      </ol>
    </>
  );
}

export default Add;
