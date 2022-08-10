import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import ArrayLinks from './ArrayLinks';


ReactDOM.render(
    <>
        {ArrayLinks.map(function arrayData(data) {
            return (
                <Card imgSrc={data.imgSrc} vName={data.title} link={data.link} />
            );
        })}
    </>,
    document.getElementById('root'));