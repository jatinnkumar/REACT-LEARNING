import React, { useState } from 'react';
import './index.css';

const UseStateTest3 = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, updatedTime] = useState(time);
    setInterval(() => {
        time = new Date().toLocaleTimeString();
        updatedTime(time);
    }, 1000);
    return (
        <>
            <div className='btn-container'>
                <h1>{currentTime}</h1>
            </div>
        </>
    );
}

export default UseStateTest3;