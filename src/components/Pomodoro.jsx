import React, { useState, useEffect } from 'react';
import './Pomodoro.css';

const Pomodoro = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        setIsRunning(false);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, seconds, minutes]);

    return (
        <div className={`pomodoro ${isDarkTheme ? 'dark' : 'light'}`}> 
            <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default Pomodoro;
