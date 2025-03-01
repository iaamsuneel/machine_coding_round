import React, { useState } from "react";
import CheckboxItem from "./Checkbox";
import { Box, Button } from "@mui/material";
export default function Checkbox() {
  const ListedOfCheckBoxes = [
    { id: 1, label: "India", checked: false },
    { id: 2, label: "Delhi", checked: false },
    { id: 3, label: "Noida", checked: false },
    { id: 4, label: "Greater Noida", checked: false },
  ];
  const [checkboxes, setCheckboxes] = useState(ListedOfCheckBoxes);
  const [isCheckAllSelected, setIsCheckAllSelected] = useState(false);
  const handleCheckboxChange = (id) => {
    const selectedCheckbox = checkboxes.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCheckboxes(selectedCheckbox);
    const isCheckAllCheckBoxes = selectedCheckbox.every((item) => item.checked);
    setIsCheckAllSelected(isCheckAllCheckBoxes);
  };
  const selectAllCheckBox = () => {
    const selectedCheckbox = checkboxes.map((item) =>
      !item.checked ? { ...item, checked: true } : item
    );
    setCheckboxes(selectedCheckbox);
    setIsCheckAllSelected(!isCheckAllSelected);
  };
  const userSelected = checkboxes.filter((item) => item.checked);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div>
          <h3 style={{ padding: "10px", textAlign: "center" }}>
            Dynamic checkbox counter
          </h3>
        </div>
        <div>
          <ol>
            <li>
              Display 4 checkboxes with different names and a button named
              selectall.
            </li>
            <li>User can select each checkbox Select all button click. </li>
            <li>
              check all checkboxes Button should be disabled once all checkboxes
              are selected.
            </li>
            <li>Display selected checkboxes count and names in ui.</li>
          </ol>
        </div>
        <Box sx={{ boxShadow: 1, p: 2, gap: 20 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              {checkboxes.map((item) => {
                return (
                  <div key={item.id}>
                    <CheckboxItem
                      label={item.label}
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                );
              })}
            </Box>
            <Box sx={{ pr: 10 }}>
              <h4>User Selected Checkbox </h4>
              <div style={{ paddingTop: "5px" }}>
                <div>No of Counts : {userSelected?.length || 0} </div>
                <div>
                  Name :
                  {userSelected.map((item) => item.label)?.toString() ||
                    "Still Not Selected"}
                </div>
              </div>
            </Box>
          </Box>
          <Box sx={{ pt: 2, pl: 1 }}>
            <Button
              size="small"
              variant="contained"
              disabled={isCheckAllSelected}
              sx={{ textTransform: "capitalize" }}
              onClick={selectAllCheckBox}
            >
              Select All
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
