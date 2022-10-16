import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

const App = () => {
    const myState = useSelector((state) => { return state.number });
    const dispatch = useDispatch();
    return (
        <>
            <h1>{myState}</h1>
            <button onClick={() => { dispatch(decNumber(1)) }}>-</button>
            <button onClick={() => { dispatch(incNumber(1)) }}>+</button>
        </>
    );
}

export default App;