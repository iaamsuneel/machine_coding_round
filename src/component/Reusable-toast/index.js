import React, { useState } from "react";
import "./style.css";
import Toast from "./Toast";
export default function ReusableToast() {
  const [toasts, setToasts] = useState([]);
  const messageHandler = (message, type, duration) => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      { id: id, message: message, type: type, duration: duration },
    ]);
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };
  const removeToast = (id) => {
    setToasts((prev) => [...prev.filter((item) => item.id !== id)]);
  };
  return (
    <div className="main-container">
      <h3>Custome Toaster</h3>
      <div>
        <button
          onClick={() => messageHandler("Success Message", "success", 3000)}
          className="success"
        >
          Show Success
        </button>
        <button
          onClick={() => messageHandler("Info Message", "info", 2000)}
          className="warning"
        >
          Warning
        </button>
        <button
          onClick={() => messageHandler("Error Message", "error", 4000)}
          className="error"
        >
          Show Error
        </button>
      </div>
      {toasts.map(({ id, message, type, duration }) => {
        return (
          <Toast key={id} message={message} type={type} duration={duration} />
        );
      })}
    </div>
  );
}
