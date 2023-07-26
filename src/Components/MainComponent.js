import React, { useState } from "react";
import "./style.scss";
import ListComponent from "./ListComponent";

const MainComponent = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleAddButtonClick = () => {
    setList([...list, {id: new Date().getTime().toString(),
    name: text},]);
    // setText("");
  };
  const handleDeleteButton = (id) => {
    const filter = list.filter((ele) => {
        return ele.id!==id;
    });
    setList(filter);
  };

  return (
    <div className="main-component">
      <h2>ToDo App</h2>
      <div className="input-button">
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your items here"
          type="text"
          value={text}
        />
        <button onClick={handleAddButtonClick}>ADD</button>
      </div>
      {list.map((item) => {
        return <ListComponent key={item.id} list={item} handleDeleteButton={handleDeleteButton}/>;
      })}
    </div>
  );
};

export default MainComponent;
