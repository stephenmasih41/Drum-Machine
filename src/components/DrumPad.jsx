import React from "react";

const DrumPad = ({ pad, onPlay }) => {
  const handleClick = () => {
    const audio = document.getElementById(pad.key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      onPlay(pad.name);
    }
  };
  return (
    <div
      id={pad.name}
      className="drum=pad bg-gray-800 text-white w-20 h-20 flex justify-center items-center rounded-lg shadow-lg cursor-pointer transition-all text-2xl font-bold"
      onClick={handleClick}
    >
      {pad.key}
      <audio className="clip" id={pad.key} src={pad.url}></audio>
    </div>
  );
};

export default DrumPad;
