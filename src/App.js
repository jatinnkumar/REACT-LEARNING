import React, { useRef, useEffect } from 'react';

const App = () => {
    const elem = useRef();
    useEffect(() => {
        elem.current.focus();
    })
    return (
        <>
            <label for="refInput">Enter Your Name:</label><br />
            <input ref={elem} id="refInput" type="text" />
        </>
    );
}

export default App;