import React from "react";
export default function CheckboxItem({ label, checked, onChange }) {
  console.log("checked, onChange", checked, onChange);
  return (
    <div style={{ padding: "5px" }}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
}
