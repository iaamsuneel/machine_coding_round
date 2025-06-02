import { useState } from "react";
import CheckBoxItem from "./CheckBoxItem";
import "./CheckBoxStyle.css";
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
          { id: 6, label: "Lemon" },
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
  {
    id: 10,
    label: "ColdDrink",
  },
];
export default function NestedCheckBox() {
  const [checked, setChecked] = useState({});
  return (
    <div className="paragraph">
      <div>
        <div>
          <h3 style={{ textAlign: "center", textTransform: "capitalize" }}>
            The task was to implement a nested checkbox
          </h3>
          <ol>
            <li>
              Follow-up 1: Generate a recursively nested structure based on a
              given configuration.
            </li>
            <li>
              Follow-up 2: If all child checkboxes are selected, the parent
              checkbox should automatically be checked.
            </li>
            <li>
              Follow-up 3: If the parent checkbox is selected, all child
              checkboxes should also be selected.
            </li>
          </ol>
        </div>
        <CheckBoxItem
          checkBoxList={CheckboxesData}
          checked={checked}
          setChecked={setChecked}
          originalList={CheckboxesData}
        />
      </div>
    </div>
  );
}
