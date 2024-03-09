import React from "react";

function DisplayTime({ timestamp }) {
  return (
    <div className="flex flex-col gap-y-3 text-center">
      <p className="text-5xl font-medium">
        {("0" + Math.floor((timestamp / 86400000) % 60)).slice(-3)}
        <span className="text-sm">days</span>
      </p>
      <div className="text-4xl font-medium [&_span+span:before]:content-[':'] [&_span+span:before]:bottom-0.5 [&_span+span:before]:relative [&_span+span:before]:mx-2">
        <span>
          {("0" + Math.floor((timestamp / 3600000) % 60)).slice(-2)}
          <span className="text-sm">hr</span>
        </span>
        <span>
          {("0" + Math.floor((timestamp / 60000) % 60)).slice(-2)}
          <span className="text-sm">mins</span>
        </span>
        <span>
          {("0" + Math.floor((timestamp / 1000) % 60)).slice(-2)}
          <span className="text-sm">s</span>
        </span>
        {/* <span>{("0" + ((timestamp / 10) % 100)).slice(-2)}<span className="text-sm">ms</span></span> */}
      </div>
    </div>
  );
}

const Countdown = () => {
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prevTime) => prevTime - 10), 10);
    } else if (!running) clearInterval(interval);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="md:w-4/12 md:h-3/12 px-4 py-6 mx-auto space-y-4 bg-stone-50 shadow rounded-md">
      <input type="datetime-local" name="" id="" />
      <DisplayTime timestamp={time} />
      <div className="flex justify-center gap-2">
        <button
          className="btn primary"
          onClick={() => setRunning(true)}
          disabled={running || time > 0}
        >
          Start
        </button>
        <button
          className="btn primary"
          onClick={() => setRunning((prev) => !prev)}
          disabled={time <= 0}
        >
          {running ? "Pause" : "Resume"}
        </button>
        <button
          className="btn primary"
          onClick={() => {
            setTime(0);
            setRunning(false);
          }}
          disabled={time <= 0}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    } else if (!running) clearInterval(interval);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="md:w-4/12 md:h-3/12 px-4 py-6 mx-auto space-y-4 bg-stone-50 shadow rounded-md">
      <DisplayTime timestamp={time} />
      <div className="flex justify-center gap-2">
        <button
          className="btn primary"
          onClick={() => setRunning(true)}
          disabled={running || time > 0}
        >
          Start
        </button>
        <button
          className="btn primary"
          onClick={() => setRunning((prev) => !prev)}
          disabled={time <= 0}
        >
          {running ? "Pause" : "Resume"}
        </button>
        <button
          className="btn primary"
          onClick={() => {
            setTime(0);
            setRunning(false);
          }}
          disabled={time <= 0}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
