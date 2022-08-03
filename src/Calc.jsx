import React from 'react';

function Sum(a, b) {
    let sum = a + b;
    return sum;
}

function Sub(a, b) {
    let sub = a - b;
    return sub;
}

function Mult(a, b) {
    let mult = a * b;
    return mult;
}

function Div(a, b) {
    let div = a / b;
    return div;
}

export { Sum, Sub, Mult, Div };