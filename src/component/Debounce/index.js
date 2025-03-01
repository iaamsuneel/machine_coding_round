import React, { useEffect, useState } from "react";

export default function Debounced() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div>
        <textarea
          style={{
            padding: "7px",
            borderRadius: "7px",
            width: "300px",
            minHeight: "80px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
          placeholder="Enter your address"
          onChange={handleChange}
        />
        <h4>User Enter Address: {debouncedValue}</h4>
      </div>
    </div>
  );
}
