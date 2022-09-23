import React, { createContext } from 'react';
import CompB from './CompB';


const FirstName = createContext();
const LastName = createContext();
const App = () => {
    return (
        <>
            <FirstName.Provider value={"Jatin"}>
                <LastName.Provider value={"Kumar"}>
                    <CompB />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default App;
export { FirstName, LastName };