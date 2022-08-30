import React from 'react';

const App = () => {
    return (
        <>
            <div className='toDoList-Content'>
                <div className='toDoList-Heading'>
                    <h1>To Do List</h1>
                </div>
                <input className='toDoList-input' type='text' placeholder='Add Items' />
                <button className='toDoList-Button'>+</button>

                <ol className='toDoList-List'>
                    <li><button className='toDoList-ButtonSecond'>X</button>Mango</li>
                </ol>
            </div>
        </>
    );
}

export default App;