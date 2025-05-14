import React from "react";

export default function CheckBox({ data }) {
  const isCheckboxHandler = (val, id) => {
    console.log("ee::::", val, id);

  };
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={false}
              onChange={(e) => isCheckboxHandler(e.target.checked, item)}
            />
            <span>{item.label}</span>
            <div style={{ paddingLeft: "30px" }}>
              {item.children && <CheckBox data={item.children} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
