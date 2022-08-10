import React from 'react';
import './card.css';

function Card(props) {
    console.log(props);
    return (
        <>
            <div className='card'>
                <a href={props.link} target="_blank">
                    <img src={props.imgSrc} />
                </a>
                <div className="container">
                    <h4><b>{props.vName}</b></h4>
                    <a href={props.link} target="_blank">
                        <button>
                            Watch Now
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;