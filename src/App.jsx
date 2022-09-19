import React, { createContext } from 'react';
import CompA from './CompA';


const FirstName = createContext();
const LastName = createContext();
const App = () => {
    return (
        <>
            <FirstName.Provider value={"Karan"}>
                <LastName.Provider value={"Pal"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default App;
export { FirstName, LastName };