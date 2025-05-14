import React, { useState } from "react";

export default function ChipsInput() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const onDelete = (title) => {
    setList((prevList) => prevList.filter((item) => item !== title));
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onKeyDonwHandler = (e) => {
    if (e.key === "Enter" && list.indexOf(input.trim()) === -1) {
      setList((prev) => [...prev, input]);
      setInput("");
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
    >
      <div>
        <input
          value={input}
          onChange={onChangeHandler}
          onKeyDown={onKeyDonwHandler}
          style={{ padding: "10px 20px", borderRadius: "7px" }}
          type="text"
          placeholder="Enter title ..."
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "300px",
          }}
        >
          {list.map((item, index) => (
            <div key={index} style={{ position: "relative" }}>
              <div
                style={{
                  backgroundColor: "#d6cfcf",
                  padding: "5px 40px 5px 15px",
                  borderRadius: "7px",
                }}
                title={item}
              >
                {item}
              </div>
              <button
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "6%",
                  border: "none",
                  borderRadius: "15px",
                  color: "white",
                  backgroundColor: "#f44848",
                  cursor: "pointer",
                }}
                onClick={() => onDelete(item)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
