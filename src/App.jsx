import React, { useState } from 'react';

const App = () => {
    const [formData, setFullName] = useState({
        fName: '',
        lName: '',
        email: ''
    });
    const inputFunc = (data) => {
        const { name, value } = data.target;
        setFullName((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });

    }
    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className='formDiv'>
                <form onSubmit={onFormSubmit}>
                    <h1 className='formHeading'>Hello {formData.fName} {formData.lName}</h1>
                    <h2 className='formHeading'>{formData.email}</h2>
                    <input className='formInput' type='text' name='fName' placeholder='Enter Your First Name' onChange={inputFunc} value={formData.fName} /><br /><br />
                    <input className='formInput' type='text' name='lName' placeholder='Enter Your Last Name' onChange={inputFunc} value={formData.lName} /><br /><br />
                    <input className='formInput' type='text' name='email' placeholder='Enter Your Email' onChange={inputFunc} value={formData.email} /><br /><br />
                    <button className='formBtn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default App;