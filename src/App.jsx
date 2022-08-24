import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState();
    const [lname, setLname] = useState();
    const [fullName, setFullName] = useState();
    const inputFunc = (data) => {
        setName(data.target.value);
    }
    const inputFuncSec = (data) => {
        setLname(data.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        setFullName(`${name} ${lname}`);
    }

    return (
        <>
            <div className='formDiv'>
                <form onSubmit={onFormSubmit}>
                    <h1 className='formHeading'>Hello {fullName}</h1>
                    <input className='formInput' type='text' placeholder='Enter Your First Name' onChange={inputFunc} value={name} /><br /><br />
                    <input className='formInput' type='text' placeholder='Enter Your Last Name' onChange={inputFuncSec} value={lname} /><br /><br />
                    <button className='formBtn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default App;