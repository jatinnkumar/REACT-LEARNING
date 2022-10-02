import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const About = () => {
    const { firstName, lastName } = useParams();
    const location = useLocation();
    console.log(location.pathname);
    const navigate = useNavigate();
    const returnToHomePage = () => {
        navigate("/home");
    }
    return (
        <>
            <h1>Hello {firstName} {lastName}, Welcome to about page.</h1>
            <button onClick={returnToHomePage}>Go To Home Page</button>
        </>
    );
}

export default About;