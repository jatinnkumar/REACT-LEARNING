import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const inputFunc = (data) => {
        setName(data.target.value);
    }
    const onSubmit = () => {
        setFullName(name);
    }

    return (
        <>
            <div className='formDiv'>
                <h1 className='formHeading'>Hello {fullName}</h1>
                <input className='formInput' type='text' placeholder='Enter Your Name' onChange={inputFunc} value={name} /><br /><br />
                <button className='formBtn' onClick={onSubmit}>Submit</button>
            </div>
        </>
    );
}

export default App;