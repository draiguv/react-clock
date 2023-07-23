import React, { useState } from 'react';

export default function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(getTime, 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}
