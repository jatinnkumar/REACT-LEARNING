import React, { useState } from "react";

const App = () => {
    let bg = 'green';
    let text = 'Single Click to Change !';
    const [bgColor, setBgColor] = useState(bg);
    const [btnText, setText] = useState(text);
    const changeBg = () => {
        setBgColor('Blue');
        setText('Double Click to Change !');
    }
    const bgBack = () => {
        setBgColor('Green');
        setText('Single Click to Change !');
    }
    return (
        <>
            <div className='btn-container' style={{ background: bgColor }}>
                <button className='hookBtn' onClick={changeBg} onDoubleClick={bgBack}>{btnText}</button>
            </div>
        </>
    );
}

export default App;