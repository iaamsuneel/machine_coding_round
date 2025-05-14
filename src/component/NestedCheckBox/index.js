import React from "react";
import CheckBox from "./CheckBox";

export default function NestedCheckBox() {
  const CheckboxesData = [
    {
      id: 1,
      label: "Fruits",
      children: [
        { id: 2, label: "Apple" },
        { id: 3, label: "Banana" },
        {
          id: 4,
          label: "Citrus",
          children: [
            { id: 5, label: "Orange" },
            {
              id: 6,
              label: "Lemon",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      label: "Vegetables",
      children: [
        { id: 8, label: "Carrot" },
        { id: 9, label: "Broccoli" },
      ],
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <CheckBox data={CheckboxesData} />
    </div>
  );
}
