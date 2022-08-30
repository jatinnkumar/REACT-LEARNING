import React, { useState } from 'react';

const Form4 = () => {
    const [formData, setFullName] = useState({
        firstName: '',
        lastName: '',
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
                    <h1 className='formHeading'>Hello {formData.firstName} {formData.lastName}</h1>
                    <h2 className='formHeading'>{formData.email}</h2>
                    <input className='formInput' type='text' name='firstName' placeholder='Enter Your First Name' onChange={inputFunc} value={formData.firstName} /><br /><br />
                    <input className='formInput' type='text' name='lastName' placeholder='Enter Your Last Name' onChange={inputFunc} value={formData.lastName} /><br /><br />
                    <input className='formInput' type='text' name='email' placeholder='Enter Your Email' onChange={inputFunc} value={formData.email} /><br /><br />
                    <button className='formBtn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form4;