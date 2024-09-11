import React from "react";
import { taskList } from "../Shared/Utils";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div
        style={{
          fontSize: "larger",
          textAlign: "center",
          margin: "10px",
        }}
      >
        Lists
      </div>
      {taskList.length > 0 &&
        taskList.map((item, index) => {
          return (
            <Link to={item.url} style={{ textDecoration: "none" }} key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {/* <div style={{ textAlign: "left" }}>
									{index + 1} :-
								</div>
								<div style={{ textAlign: "right" }}>
									{item.name}
								</div> */}
                <ul>
                  <li>{item.name}</li>
                </ul>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
