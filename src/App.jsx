import React, { useReducer } from 'react';


const initialState = 0;
const reducer = (state, action) => {
    if (action.type === "Increment") {
        return state + 1;
    }
    if (action.type === "Decrement") {
        if (state == 0) {
            return 0;
        } else {
            return state - 1;
        }
    }
    return state;
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => { dispatch({ type: "Increment" }) }}>+</button>
            <button onClick={() => { dispatch({ type: "Decrement" }) }}>-</button>
        </>
    );
}

export default App;