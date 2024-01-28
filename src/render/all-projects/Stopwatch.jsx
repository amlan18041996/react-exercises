import React from 'react';

function DisplayTime({timestamp}) {
    return (
        <div className="text-4xl text-center font-semibold [&_span+span:before]:content-[':'] [&_span+span:before]:bottom-0.5 [&_span+span:before]:relative [&_span+span:before]:mx-2">
            <span>{("0" + Math.floor((timestamp / 60000) % 60)).slice(-2)}</span>
            <span>{("0" + Math.floor((timestamp / 1000) % 60)).slice(-2)}</span>
            <span>{("0" + ((timestamp / 10) % 100)).slice(-2)}</span>
        </div>
    );
}

const Stopwatch = () => {
    const [time, setTime] = React.useState(0);
    const [running, setRunning] = React.useState(false);

    React.useEffect(() => {
        let interval;
        if (running) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!running) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className="md:w-3/12 md:h-3/12 px-4 py-6 mx-auto space-y-4 bg-stone-50 shadow rounded-md">
            <DisplayTime timestamp={time} />
            <div className="flex justify-center gap-2">
                <button className="btn btn-primary" onClick={() => setRunning(true)} disabled={running}>Start</button>
                <button className="btn btn-primary" onClick={() => setRunning(false)} disabled={!running}>Stop</button>
                <button className="btn btn-primary" onClick={() => setTime(0)} disabled={time <= 0}>Reset</button>       
            </div>
        </div>
    );
}
 
export default Stopwatch;