import React from "react";

export default function ItemList({ dataList }) {
  const tableStyle = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
  };

  const styleThTd = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  };

  const tableContainer = {
    maxHeight: "600px",  // Set maximum height for scrollable area
    overflowY: "auto",   // Enable vertical scrolling
  };

  const stickyHeader = {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff", // White background for header
    zIndex: 2,               // Ensure it stays above content
  };

  return (
    <div style={{ paddingTop: "7px" }}>
      <div style={tableContainer}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}>Company Name</th>
              <th style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}>Funder Year</th>
              <th style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}>Location</th>
              <th style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}>Work</th>
              <th style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}>No. Of Employees</th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((item, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff" }}>
                  <td style={styleThTd}>{item.company}</td>
                  <td style={styleThTd}>{item.funderYear}</td>
                  <td style={styleThTd}>{item.location}</td>
                  <td style={styleThTd}>{item.work}</td>
                  <td style={styleThTd}>{item.noOfEmployee}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", paddingTop: "4px" }}>
                  No record found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
