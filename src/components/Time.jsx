import React, { useState } from "react";

const Time = () => {
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString("it-IT")
    );

    setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString("it-IT"));
    }, 1000);

    return <div className="footer-time">{currentTime}</div>;
};

export default Time;
