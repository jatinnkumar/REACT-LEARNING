import React from 'react';
import ReactDOM from './react-dom';

let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = '';
const cssStyle = {};
if (currentDate >= 1 && currentDate < 12) {
    greeting = ' Good Morning.';
    cssStyle.color = 'green';
} else if (currentDate >= 12 && currentDate < 19) {
    greeting = ' Good Afternoon.';
    cssStyle.color = 'blue';
} else {
    greeting = ' Good Night.';
    cssStyle.color = 'orange';
}

ReactDOM.render(
    <>
        <div className='container'>
            <div className='greeting'>
                <h1 className='heading'>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
            </div>
        </div>
    </>,
    document.getElementById("root")
);