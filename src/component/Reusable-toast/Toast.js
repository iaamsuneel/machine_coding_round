import { useEffect, useState } from "react";
import "./style.css";
export default function Toast({ message, type, duration }) {
  const [isVisible, setIsVisible] = useState(false);
  const backgroundColors = {
    success: "green",
    error: "red",
    info: "yellow",
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(true);
    });
    return () => clearTimeout(timerId);
  }, [duration]);
  if (!isVisible) return null;
  return (
    <div
      className="toaster-message"
      style={{ backgroundColor: backgroundColors[type] }}
    >
      <p>{message}</p>
    </div>
  );
}
