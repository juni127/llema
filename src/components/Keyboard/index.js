import './index.css';
import React from "react";
import { connect } from "react-redux";

import {
    delTries,
    endTries,
    setChar,
    setExists,
    setRunning,
} from "../../redux/actions";

import KeyRow from './KeyRow';

import wordList from '../../palavras.json';

const Keyboard = ({delTries, endTries, setExists, setRunning, allowSubmit, tried, word, tries}) => {

    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];

    const wordExists = word => wordList.some(w => w === word);
    const winCondition = (word, target) => word == target;

    return (
        <div class="d-flex flex-column align-items-center keyboard">
            <div class="d-flex flex-row justify-content-center keyboard-row">
                <button class="keyboard-icon-btn" onClick={() => delTries()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                        <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                        <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                    </svg>
                </button>
                <button class="keyboard-icon-btn" {...{disabled: allowSubmit}} onClick={() => {
                    let palavra = tried.join('').toLowerCase();
                    if(wordExists(palavra)){
                        endTries(tried, word.toUpperCase());
                        if(winCondition(palavra, word) || tries.length == 6)
                            setRunning(false);
                    } else 
                        setExists(false);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                </button>
            </div>
            {rows.map((row, rowIndex) => <KeyRow key={rowIndex} row={row}/>)}
        </div>
    );
};

const mapStateToProps = state => ({
    allowSubmit: state.tries[state.tries.length-1].length != 5,
    tried: state.tries[state.tries.length-1],
    tries: state.tries,
    word: state.word
});

const mapDispatchToProps = dispatch => ({
    delTries: () => dispatch(delTries()),
    endTries: (tried, word) => {
        tried.map((char, index) => {
            let color = 'red';
    
            if(word.includes(char)) 
                color = 'yellow';
            if(word[index] === char) 
                color = 'green';
            dispatch(setChar({char, color}))
        });
        dispatch(endTries());
    },
    setExists: (exists) => dispatch(setExists(exists)),
    setRunning: (running) => dispatch(setRunning(running)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);