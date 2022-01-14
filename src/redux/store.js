import { createStore } from 'redux';

import {
    wordReducer,
    triesReducer,
    charsReducer,
    existsReducer,
    runningReducer,
    timerReducer,
} from './reducers';

const initialState = {
    word: '',
    tries: [[]],
    chars: {},
    exists: true,
    running: true,
    timer: 60,
};

const rootReducer = (state = initialState, action) => ({
    word: wordReducer(state.word, action),
    tries: triesReducer(state.tries, action),
    chars: charsReducer(state.chars, action),
    exists: existsReducer(state.exists, action),
    running: runningReducer(state.running, action),
    timer: timerReducer(state.timer, action),
});

export default createStore(rootReducer);