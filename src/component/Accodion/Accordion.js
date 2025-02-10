import React from "react";
import { accodianData } from "../../shared/Utils";
import AccordionCard from "./AccordionCard";

export default function Accordion() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "10px",
          backgroundColor: "#fff",
        }}
      >
        Accodion
      </div>
      <div>
        {accodianData.length > 0 &&
          accodianData.map((item, index) => {
            return (
              <div key={item.name}>
                <AccordionCard item={item} index={index} />
              </div>
            );
          })}
      </div>
    </>
  );
}
