import { useState, useEffect } from "react";
import "./App.css";

export default function Message() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <div className="card">
      <h1>Hello World</h1>
      <p>Welcome to my first React app </p>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
