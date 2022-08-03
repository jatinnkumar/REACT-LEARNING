import React from 'react';
import { Sum, Sub, Mult, Div } from './Calc';
import './index.css';

function App() {
  return (
    <>
      <div></div>
      <div className='calc'>
        <ol>
          <li>The Sum of numbers is {Sum(34, 6)}.</li>
          <li>The Subtraction of numbers is {Sub(50, 5)}.</li>
          <li>The Multiplication of numbers is {Mult(12, 2)}.</li>
          <li>The Division of numbers is {Div(36, 6)}.</li>
        </ol>
      </div>
      <div></div>
    </>
  );
}

export default App;