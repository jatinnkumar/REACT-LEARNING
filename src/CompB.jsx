import React, { useContext } from 'react';
import { FirstName, LastName } from './App';

const CompB = () => {

    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);

    return (
        <>
            <h1>My name is {firstName} {lastName}.</h1>
        </>
    );
}

export default CompB;