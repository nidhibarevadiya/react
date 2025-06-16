import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="display">
        <span>{String(Math.floor(count / 3600)).padStart(2, '0')}</span>:
        <span>{String(Math.floor((count % 3600) / 60)).padStart(2, '0')}</span>:
        <span>{String(count % 60).padStart(2, '0')}</span>
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;