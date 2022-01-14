import words from '../palavras.json';

const WORD = {
    SET: 'WORD/SET',
}

const getWord = () => {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    const hashSec = (secondsSinceEpoch - (secondsSinceEpoch%300) - 1);
    const hashing = hashSec%words.length;
    const secondsLeft = 300 - (secondsSinceEpoch%300);
    return [words[hashing], secondsLeft];
}

const setWord = () => ({
    type: WORD.SET,
    payload: getWord(),
});

const TRIES = {
    ADD: 'TRIES/ADD',
    DEL: 'TRIES/DEL',
    END: 'TRIES/END',
}

const addTries = char => ({
    type: TRIES.ADD,
    payload: char,
});

const delTries = () => ({
    type: TRIES.DEL,
});

const endTries = () => ({
    type: TRIES.END,
});

const CHARS = {
    SET: 'CHARS/SET',
}

const setChar = char => ({
    type: CHARS.SET,
    payload: char,
});

const EXISTS = {
    SET: 'EXISTS/SET',
}

const setExists = exists => ({
    type: EXISTS.SET,
    payload: exists,
});

const RUNNING = {
    SET: 'RUNING/SET',
}

const setRunning = running => ({
    type: RUNNING.SET,
    payload: running,
});

const TIMER = {
    SET: 'TIMER/SET',
}

const setTimer = timer => {
    return timer >= 0 ? {
        type: TIMER.SET,
        payload: timer,
    }:setWord();
};

export {
    WORD,
    setWord,
    TRIES,
    addTries,
    delTries,
    endTries,
    CHARS,
    setChar,
    EXISTS,
    setExists,
    RUNNING,
    setRunning,
    TIMER,
    setTimer,
}