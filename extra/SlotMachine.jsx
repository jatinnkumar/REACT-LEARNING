import React from 'react';

const SlotMachine = (props) => {
    let { x, y, z } = props;
    if ((x === y) && (y === z)) {
        return (
            <>
                <div className='slotMachine'>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is Matching.</h1>
                    <hr />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='slotMachine'>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is Not Matching.</h1>
                    <hr />
                </div>
            </>
        );
    }

}

export default SlotMachine;