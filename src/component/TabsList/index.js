import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export default function Index() {
    const [value, setValue] = useState(0);
    const customStyleBtn = {
        border: "none",
        padding: "7px 25px",
        cursor: "pointer",
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    margin: "40px",
                    width: "500px",
                    height: "200px",
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid rgb(0 0 0 / 5%) ",
                    boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "20px",
                        columnGap: "15px",
                        cursor: "pointer",
                    }}
                >
                    <button onClick={() => setValue(0)} style={customStyleBtn}>
                        Home
                    </button>
                    <button onClick={() => setValue(1)} style={customStyleBtn}>
                        About
                    </button>
                    <button onClick={() => setValue(2)} style={customStyleBtn}>
                        Contact
                    </button>
                </div>
                <hr />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {value === 0 && (
                        <div>
                            <Home />{" "}
                        </div>
                    )}
                    {value === 1 && (
                        <div>
                            <About />{" "}
                        </div>
                    )}
                    {value === 2 && (
                        <div>
                            <Contact />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
