import React from 'react';
import SlotMachine from './SlotMachine';
import './index.css';

const App = () => {
    return (
        <>
            <h1 className='Heading'>Welcome to <span>Slot Machine Game</span></h1>
            <SlotMachine x='🏀' y='🏀' z='🏀' />
            <SlotMachine x='🏀' y='🏀' z='😄' />
            <SlotMachine x='😄' y='😄' z='🏀' />
        </>
    );
};

export default App;