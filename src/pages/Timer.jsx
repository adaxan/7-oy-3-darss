import React, { useState, useEffect } from "react";

function Timer() {
  const [inputTime, setInputTime] = useState("");
  const [timeLeft, setTimeLeft] = useState(null); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(function () {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(function () {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }
    return function () {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  function handleStart() {
    if (inputTime && !isNaN(inputTime) && inputTime > 0) {
      setTimeLeft(Number(inputTime));
      setIsRunning(true);
    }
  }

  function handleInputChange(e) {
    setInputTime(e.target.value);
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-4">
        <input
          type="number"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Sekundni kiriting"
          value={inputTime}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="btn btn-warning"
        onClick={handleStart}
        disabled={isRunning}
      >
        Boshlash
      </button>
      <div className="mt-6 text-3xl font-bold text-gray-800">
        {timeLeft !== null && timeLeft > 0
          ? `${timeLeft} sekund`
          : timeLeft === 0
          ? "Vaqt tugadi!"
          : ""}
      </div>
    </div>
  );
}

export default Timer;