import React, { useState, useEffect } from "react";

export const DigitalClock: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 -> 12
      const format = (num: number) => num.toString().padStart(2, "0");
      setTime(`${format(hours)}:${format(minutes)}:${format(seconds)} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-5xl font-mono font-bold text-center p-4 rounded-lg bg-gray-100 text-blue-500">
      {time}
    </div>
  );
};
