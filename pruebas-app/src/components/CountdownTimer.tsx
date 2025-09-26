import React, { useState, useEffect } from "react";

export const CountdownTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (running && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (seconds === 0) {
      setRunning(false);
    }
    return () => clearInterval(interval);
  }, [running, seconds]);

  const startCountdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (seconds > 0) setRunning(true);
  };

  return (
    <div className="space-y-2 w-full flex flex-col items-center">
      <input
        type="number"
        className="border p-2 rounded-lg w-32 text-center"
        value={seconds}
        onChange={e => setSeconds(Number(e.target.value))}
      />
      <button
        className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition-all duration-200"
        onClick={startCountdown}
      >
        Iniciar
      </button>
      <div className="text-4xl font-mono font-bold text-center">
        {seconds > 0 ? seconds : <span className="animate-pulse text-red-600">¡Tiempo terminado!</span>}
      </div>
    </div>
  );
};
