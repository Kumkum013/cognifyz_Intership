import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const colors = [
    { name: "Red", code: "red" },
    { name: "Green", code: "green" },
    { name: "Blue", code: "blue" },
    { name: "Yellow", code: "yellow" },
    { name: "Orange", code: "orange" },
    { name: "Purple", code: "purple" },
    { name: "Pink", code: "pink" },
    { name: "Black", code: "black" },
    { name: "Brown", code: "brown" },
  ];

  return (
    <div
      className="app-container"
      style={{ backgroundColor: color }}
    >
      <div className="palette-box">
        {colors.map((c) => (
          <div className="color-item" key={c.code}>
            <button
              className="color-btn"
              style={{ backgroundColor: c.code }}
              onClick={() => setColor(c.code)}
            ></button>
            <p className="color-label">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
