import React, { useState } from 'react';
import ArrayItems from './ArrayItems';

const App = () => {

    const [item, setItem] = useState();
    const [arrayItems, setArrayItems] = useState([]);

    const getItemName = (data) => {
        setItem(data.target.value);
    }

    const addItem = () => {
        setArrayItems((previousItems) => {
            return [...previousItems, item];
        });
        setItem('');
    }

    const removeItem = (id) => {
        setArrayItems((previousItems) => {
            return previousItems.filter((arrayElements, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className='toDoList-Content'>
                <div className='toDoList-Heading'>
                    <h1>To Do List</h1>
                </div>
                <input className='toDoList-input' type='text' placeholder='Add Items' value={item} onChange={getItemName} />
                <button className='toDoList-Button' onClick={addItem}>+</button>

                <ol className='toDoList-List'>
                    {arrayItems.map((itemValue, index) => {
                        return (
                            <ArrayItems key={index} id={index} arrayItem={itemValue} onSelect={removeItem} />
                        );
                    })}
                </ol>
            </div>
        </>
    );
}

export default App;