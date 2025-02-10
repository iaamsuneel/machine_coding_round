import { Box } from "@mui/material";
import React from "react";
export default function ItemList(probs) {
  const { dataList } = probs;
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
    maxHeight: "600px",
    overflowY: "auto",
  };
  const stickyHeader = {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 2,
  };

  return (
    <div style={{ paddingTop: "7px" }}>
      <div style={tableContainer}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th
                style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}
              >
                Company Name
              </th>
              <th
                style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}
              >
                Funder Year
              </th>
              <th
                style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}
              >
                Location
              </th>
              <th
                style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}
              >
                Work
              </th>
              <th
                style={{ ...styleThTd, ...stickyHeader, textAlign: "center" }}
              >
                No. Of Employees
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList?.length > 0 ? (
              dataList?.map((item, index) => (
                <tr
                  key={item?.funderYear}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                  }}
                >
                  <td style={styleThTd}>{item.company}</td>
                  <td style={styleThTd}>{item.funderYear}</td>
                  <td style={styleThTd}>{item.location}</td>
                  <td style={styleThTd}>{item.work}</td>
                  <td style={styleThTd}>{item.noOfEmployee}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", paddingTop: "4px" }}
                >
                  No record found
                </td>
              </tr>
            )}
            <Box></Box>
          </tbody>
        </table>
      </div>
    </div>
  );
}
