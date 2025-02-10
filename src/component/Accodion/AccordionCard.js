import React, { useState } from "react";

export default function AccordionCard(probs) {
  const { item, index } = probs;
  const [show, setShow] = useState(false);
  return (
    <>
      <div key={index} style={{ margin: !show ? "1px" : "7px" }}>
        <div
          style={{
            border: "1px solid rgb(0 0 0 / 5%) ",
            padding: "20px",
            marginLeft: "15%",
            marginRight: "15%",
            cursor: "pointer",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          onClick={() => setShow(!show)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{item.name}</div>
            <div
              onClick={() => setShow(!show)}
              style={{ fontSize: "larger", cursor: "pointer" }}
            >
              {show ? "-" : "+"}
            </div>
          </div>
          {show && <div style={{ paddingTop: "5px" }}>{item.description}</div>}
        </div>
      </div>
    </>
  );
}
