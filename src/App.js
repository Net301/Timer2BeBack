import React, { useState, useEffect } from "react";

const App = () => {
  //Minutes to meet
  const MINUTES = 8;

  //initiate seconds state
  const TIMETOGO = MINUTES * 60;
  const [seconds, setSeconds] = useState(TIMETOGO);

  // Reduce seconds to 0
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds !== 0) setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  //render view
  return (
    <div className="App">
      <h1
        //if time is over change color to red
        style={{ color: seconds === 0 ? "red" : "black" }}
      >
        We will meet again in: {seconds} seconds
      </h1>
    </div>
  );
}

export default App;