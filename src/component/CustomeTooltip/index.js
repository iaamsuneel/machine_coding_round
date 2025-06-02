import { useState } from "react";

const iconsList = [
  { emoji: "🏠", label: "Home" },
  { emoji: "📧", label: "Email" },
  { emoji: "⚙️", label: "Settings" },
];
export default function CustomeTooltip() {
  const [activeInd, setActiveInd] = useState(null);
  const onMouseHoverhandler = (index) => {
    setActiveInd(index);
  };
  return (
    <>
      <div style={{ textAlign: "center", fontWeight: 700, padding: "30px" }}>
        Custom Tooltip
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <div
          style={{
            display: "flex",
            columnGap: "20px",
            width: "100px",
            padding: "5px",
            border: "1px solid grey",
          }}
        >
          {iconsList.map((item, index) => {
            return (
              <div
                onMouseOver={() => onMouseHoverhandler(index)}
                onMouseLeave={() => setActiveInd(null)}
                style={{ position: "relative" }}
                key={index + "keys"}
              >
                {activeInd === index && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "50%",
                      padding: "4px 8px",
                      backgroundColor: "grey",
                      transform: "translateX(-50%)",
                      borderRadius: "4px",
                      fontSize: "12px",
                      color: "#fff",
                    }}
                  >
                    {item.label}
                  </div>
                )}
                <div style={{ cursor: "pointer" }}>{item.emoji}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
