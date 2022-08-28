import React, { useState } from 'react';

const Form3 = () => {
    const [formData, setFullName] = useState({
        fName: '',
        lName: '',
        email: ''
    });
    const inputFunc = (data) => {
        let name = data.target.name;
        let value = data.target.value;
        setFullName((preValue) => {
            if (name === 'fName') {
                return {
                    fName: value,
                    lName: preValue.lName,
                    email: preValue.email
                };
            } else if (name === 'lName') {
                return {
                    fName: preValue.fName,
                    lName: value,
                    email: preValue.email
                };
            } else if (name === 'eMail') {
                return {
                    fName: preValue.fName,
                    lName: preValue.lName,
                    email: value
                };
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
                    <input className='formInput' type='text' name='eMail' placeholder='Enter Your Email' onChange={inputFunc} value={formData.email} /><br /><br />
                    <button className='formBtn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form3;