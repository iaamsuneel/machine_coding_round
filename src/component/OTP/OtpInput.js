import React, { useEffect, useRef, useState } from "react";
import "./otp.css";
export default function OtpInput({ No_Otp_input = 4, autofocus = false }) {
  const [arrInput, setArrInput] = useState(new Array(No_Otp_input).fill(""));
  const [isCheckOtp, setIsCheckOtp] = useState(false);
  const inputRef = useRef([]);
  useEffect(() => {
    if (autofocus) inputRef.current[0]?.focus();
  }, [autofocus]);
  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    if (!arrInput.includes("")) setIsCheckOtp(false);
    const otpArr = [...arrInput];
    const newValue = value.trim();
    otpArr[index] = newValue;
    setArrInput(otpArr);
    newValue && inputRef.current[index + 1]?.focus();
  };
  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace")
      inputRef.current[index - 1]?.focus();
  };
  const handleOnVerifyOtp = () => {
    setIsCheckOtp(true);
    deBounceBtn();
  };
  function deBounceBtn() {
    const timer = setTimeout(() => {
      setIsCheckOtp(false);
      setArrInput(new Array(No_Otp_input).fill(""));
      if (autofocus) inputRef.current[0]?.focus();
    }, 2000);
    return () => clearInterval(timer);
  }
  return (
    <div className="container-wrapper">
      <div className="container">
        <h4 style={{ color: isCheckOtp ? "green" : "" }}>
          {isCheckOtp
            ? `Your OTP Verified : ${arrInput.join("")}`
            : "Enter OTP Code"}
        </h4>
        <div className="otp-section">
          {arrInput.map((_, index) => {
            return (
              <input
                className="otp-input"
                key={index}
                type="text"
                value={arrInput[index]}
                maxLength={1}
                ref={(keys) => (inputRef.current[index] = keys)}
                onChange={(e) => handleOnChange(e.target.value, index)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
              />
            );
          })}
        </div>
        <div className="btn">
          <button
            className="btn-item"
            onClick={handleOnVerifyOtp}
            disabled={arrInput.includes("") || isCheckOtp}
          >
            Verify
          </button>
          <button
            className="btn-item btn-cancel"
            onClick={() => {
              setArrInput(new Array(No_Otp_input).fill(""));
              setIsCheckOtp(false);
              if (autofocus) inputRef.current[0]?.focus();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
