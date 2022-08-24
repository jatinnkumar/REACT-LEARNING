import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const inputFunc = (data) => {
        setName(data.target.value);
    }
    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
    }

    return (
        <>
            <div className='formDiv'>
                <form onSubmit={onSubmits}>
                    <h1 className='formHeading'>Hello {fullName}</h1>
                    <input className='formInput' type='text' placeholder='Enter Your Name' onChange={inputFunc} value={name} /><br /><br />
                    <button className='formBtn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;