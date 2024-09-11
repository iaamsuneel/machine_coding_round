import React, { useState } from "react";
import { images } from "../Shared/Utils";
export default function Slider() {
  const [active, setActive] = useState(0);
  /* useEffect(() => {
        for (var i = 0; i < images.length; i++) {
            function slider(i) {
                setTimeout(() => {
                    setActive(i);
                    console.log(i)
                }, i*2000);
            }
            slider(i);
        }
        return ()=>{
            setActive(0)
        }
    }, [active]); */
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Slider</h3>
        {images.length > 0 &&
          images.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: active !== index ? "none" : "",
                  position: "relative",
                }}
              >
                <img
                  src={item.image_url}
                  alt="loading"
                  style={{ width: "100%" }}
                />
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {images.map((e, i) => {
                    return (
                      <span
                        style={{
                          padding: "7px 12px",
                          margin: "3px",
                          borderRadius: "50%",
                          backgroundColor: i === active ? "#cef0cb" : "#d8c9c9",
                          textAlign: "center",
                          border: "none",
                          cursor: "pointer",
                        }}
                        key={e.caption}
                        onClick={() => setActive(i)}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#a3e6a3";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor =
                            i === active ? "#cef0cb" : "#d8c9c9";
                        }}
                      >
                        {i + 1}
                      </span>
                    );
                  })}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "0",
                    right: 0,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    disabled={active === 0 ? true : false}
                    onClick={() => setActive(active - 1)}
                    style={{
                      border: "none",
                      background: "none",
                      paddingLeft: "5px",
                      fontSize: "large",
                    }}
                  >
                    {"<"}
                  </button>
                  <button
                    style={{
                      paddingLeft: "5px",
                      border: "none",
                      background: "none",
                      paddingRight: "5px",
                      fontSize: "large",
                    }}
                    disabled={images.length === active + 1 ? true : false}
                    onClick={() => setActive(active + 1)}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
