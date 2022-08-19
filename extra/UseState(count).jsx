import React, { useState } from 'react';
import './index.css';


const UseStateTest = () => {
    const [count, updatedCount] = useState(1);

    const IncNum = () => {
        updatedCount(count + 1);
    };

    const DecNum = () => {
        updatedCount(count - 1);
    };

    return (
        <>
            <div className='btn-container'>
                <h1>{count}</h1>
                <button className='hookBtn' onClick={IncNum}>Click Me To Increase</button><br /><br />
                <button className='hookBtn' onClick={DecNum}>Click Me To Decrease</button>
            </div>
        </>
    );
};

export default UseStateTest;