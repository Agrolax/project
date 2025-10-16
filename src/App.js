import React, { useState, useEffect } from "react";
import Pomodoro from "./components/Pomodoro";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`app-container ${theme}`}> 
      <div className="theme-toggle">
        <span>{theme === "light" ? "☀️" : "🌙"}</span>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>
      </div>
      <Pomodoro theme={theme} />
    </div>
  );
}

export default App;