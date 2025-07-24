import "./style.css";
import React, { useState } from "react";

function DragAndDrop() {
  const initialFruits = ["Apple", "Banana", "Grape", "Pineapple", "Mango"];
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);
  const [list, setList] = useState(initialFruits);
  const [rightList, setRightList] = useState([]);
  const onDragStartHandler = (index, item) => {
    setDraggedItemIndex(index);
    setDraggedItem(item);
  };
  const onDropItem = (dropIndex) => {
    if (draggedItemIndex === null) return;
    const updatedList = [...list];
    const item = updatedList.splice(draggedItemIndex, 1)[0];
    updatedList.splice(dropIndex, 0, item);
    setList(updatedList);
    setDraggedItemIndex(null);
    setDraggedItem(null);
  };

  const onDropRight = () => {
    if (!draggedItem) return;
    const updatedLeft = [...list];
    updatedLeft.splice(draggedItemIndex, 1);
    setList(updatedLeft);
    setRightList([...rightList, draggedItem]);
    setDraggedItem(null);
    setDraggedItemIndex(null);
  };

  const resetList = () => {
    setList(initialFruits);
    setRightList([]);
    setDraggedItemIndex(null);
    setDraggedItem(null);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Drag & Drop</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={resetList} style={{ color: "black" }}>
          Reset Lists
        </button>
      </div>
      <div className="container-item">
        <div className="left-container">
          <h4>Available Fruits</h4>
          {list.length > 0 ? (
            list.map((item, index) => (
              <div
                key={`${item}_${index}`}
                draggable
                onDragStart={() => onDragStartHandler(index, item)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => onDropItem(index)}
                className="item"
              >
                {item}
              </div>
            ))
          ) : (
            <p className="empty">No fruits here</p>
          )}
        </div>
        <div
          className="right-container"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDropRight}
        >
          <h4>Dropped Fruits</h4>
          {rightList.length > 0 ? (
            rightList.map((item, index) => (
              <div
                draggable
                onDragStart={() => onDragStartHandler(index, item)}
                key={`${item}_right_${index}`}
                className="item"
              >
                {item}
              </div>
            ))
          ) : (
            <p className="empty">Drop fruits here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;
