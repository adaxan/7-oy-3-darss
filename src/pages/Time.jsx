import React, { useState, useEffect } from "react";

function Time() {
  const [selectt, setSelectt] = useState("Tashkent");
  const [currentTime, setCurrentTime] = useState("");

  const cityTimeZones = {
    Tashkent: "Asia/Tashkent",
    London: "Europe/London",
    Tokyo: "Asia/Tokyo",
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: cityTimeZones[selectt],
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formatter.format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [selectt]);

  function handleChange(e) {
    setSelectt(e.target.value);
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-6">
        <label htmlFor="city" className="block text-lg font-semibold mb-2">
          Shaharni tanlang:
        </label>
        <select
          id="city"
          value={selectt}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          {Object.keys(cityTimeZones).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="text-3xl font-bold text-gray-800">
        {selectt} vaqti: {currentTime}
      </div>
    </div>
  );
}

export default Time;