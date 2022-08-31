import React from "react";

const ArrayItems = (props) => {

    return (
        <li key={props.key} id={props.id}><button className='toDoList-ButtonSecond' onClick={() => { props.onSelect(props.id) }}>X</button>{props.arrayItem}</li>
    );
}

export default ArrayItems;