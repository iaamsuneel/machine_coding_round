import React, { useEffect, useState } from "react";

export default function Debounced() {
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAddress(userName);
    }, 500);
    return () => clearTimeout(timer);
  }, [userName]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ maxWidth: "140px" }}>
            <h4>User Address : {address}</h4>
          </div>
        </div>
        <textarea
          style={{ padding: "7px", borderRadius: "7px" }}
          type="area"
          placeholder="Enter your address"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
