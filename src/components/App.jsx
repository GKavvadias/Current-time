import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [currTime, setCurrTime] = useState(time);

  function showTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrTime(newTime);
  }
  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;