import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(function () {
    const timer = setInterval(function () {
      setTime(new Date());
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-4xl font-bold text-gray-800">
          {formatTime(time)}
        </div>
      </div>
    </div>
  );
}

export default Clock;
