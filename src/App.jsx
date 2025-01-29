import React, { useState, useEffect } from "react";
import { drumPads } from "./components/Array";
import DrumPad from "./components/DrumPad";
function App() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      const pad = drumPads.find((pad) => pad.key === event.key.toUpperCase());
      if (pad) {
        document.getElementById(pad.key).play();
        setDisplayText(pad.name);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  return (
    <div
      id="drum-machine"
      className="bg-gray-900 p-6 rounded-xl shadow-2xl w-80 mx-auto mt-10 text-center"
    >
      <div
        id="display"
        className="text-white text-xl bg-gray-700 p-3 mb-6 rounded-lg shadow-md"
      >
        {displayText || "Press a key"}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {drumPads.map((pad) => (
          <DrumPad key={pad.key} pad={pad} onPlay={setDisplayText} />
        ))}
      </div>
    </div>
  );
}

export default App;
