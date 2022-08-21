import React, { useState } from 'react';
import './index.css';

const UseStateTest2 = () => {
    let currentTime = new Date().toLocaleTimeString();
    const [time, updateTime] = useState(currentTime);

    const getTime = () => {
        currentTime = new Date().toLocaleTimeString();
        updateTime(currentTime);
    };

    return (
        <>
            <div className='btn-container'>
                <h1>{time}</h1>
                <button className='hookBtn' onClick={getTime}>Get Time</button>
            </div>
        </>
    );
};

export default UseStateTest2;
