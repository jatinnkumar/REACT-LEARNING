import React from 'react';
import { FirstName, LastName } from './App';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(firstName) => {
                    return (
                        <>
                            <LastName.Consumer>
                                {(lastName) => {
                                    return <h1>My name is {firstName} {lastName}.</h1>;
                                }}
                            </LastName.Consumer>
                        </>
                    )
                }}
            </FirstName.Consumer>
        </>
    );
}

export default CompC;