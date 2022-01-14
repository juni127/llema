import React from "react";

const WordCell = ({index, char, word, correction}) => {

    let color = 'red';
    
    if(word.includes(char)) 
        color = 'yellow';
    if(word[index] === char) 
        color = 'green';

    return (
        <input class={`word-cell ${correction?color:''}`} disabled value={char}/>
    );
}

export default WordCell;