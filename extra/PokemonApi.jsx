import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonApi = () => {
    const [num, setNum] = useState();
    const [characterName, setCharacterName] = useState();
    const [moves, setMoves] = useState();
    const colorStyle = {
        color: 'yellow'
    };
    const selectValue = (event) => {
        setNum(event.target.value);
    }

    useEffect(() => {
        async function getdata() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setCharacterName(response.data.name);
            setMoves(response.data.moves.length);
            console.log(response);
        }
        getdata();
    });
    return (
        <>
            <h1>Hello, My Name is <span style={colorStyle}>{characterName}</span> and I Have <span style={{ color: 'red' }}>{moves}</span> moves.</h1>
            <select value={num} onChange={selectValue}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="25">25</option>
            </select>
        </>
    );
}

export default PokemonApi;