import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const IncDecMaterialUi = () => {
    const [number, setNumber] = useState(0);
    const decreaseNumber = () => {
        if (number > 0) {
            setNumber(number - 1);
        } else {
            setNumber(0);
        }
    }

    const increaseNumber = () => {
        setNumber(number + 1);
    }
    return (
        <>
            <div className='toDoList-Content'>
                <h1 className="headingNumber">{number}</h1>
                <div class="buttonContainer">
                    <Tooltip title="Decrease">
                        <Button className="decreaseButton" onClick={decreaseNumber}><RemoveIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Increase">
                        <Button className="increaseButton" onClick={increaseNumber}><AddIcon /></Button>
                    </Tooltip>
                </div>
            </div>
        </>
    );
}

export default IncDecMaterialUi;