import React from "react";
export default function ItemList({ dataList }) {
  console.log("dataList", dataList);
  return (
    <div>
      {dataList.length > 0 ? (
        dataList &&
        dataList.length > 0 &&
        dataList.map((item, index) => {
          return (
            <div
              style={{
                paddingTop: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              {`${item.company} (${item.location})`}
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: "center", paddingTop: "4px" }}>
          No record found
        </div>
      )}
    </div>
  );
}
