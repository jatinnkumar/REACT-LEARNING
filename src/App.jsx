import React, { useEffect, useState } from 'react';
const App = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    useEffect(() => {
        alert("I am clicked !!!");
    }, [num]);
    return (
        <>
            <button onClick={() => { setNum(num + 1); }}>+</button>
            <p>{num}</p>
            <button onClick={() => { setNum2(num2 + 1); }}>+</button>
            <p>{num2}</p>
        </>
    );
}

export default App;