import {
    WORD,
    TRIES,
    CHARS,
    EXISTS,
    RUNNING,
    TIMER,
} from './actions';

const wordSwitcher = {
    [WORD.SET]: (state, action) => action.payload[0],
    'default': (state, action) => state,
};

const wordReducer = (state, action) => 
    (wordSwitcher[action.type] || wordSwitcher.default)(state, action);

const triesSwitcher = {
    [TRIES.ADD]: (state, action) => state.map((t, i) => i==state.length-1&&state[i].length<5?[...t, action.payload]:t),
    [TRIES.DEL]: (state, action) => state.map((t, i) => i==state.length-1?[...t.slice(0, -1)]:t),
    [TRIES.END]: (state, action) => [...state, []],
    [TIMER.SET]: (state, action) => action.payload == 0?[[]]:state,
    'default': (state, action) => state,
};

const triesReducer = (state, action) =>
    (triesSwitcher[action.type] || triesSwitcher.default)(state, action);

const charsSwitcher = {
    [CHARS.SET]: (state, action) => ({...state, [action.payload.char]: action.payload.color}),
    [WORD.SET]: (state, action) => action.payload[1]?state:{},
    'default': (state, action) => state,
};

const charsReducer = (state, action) =>
    (charsSwitcher[action.type] || charsSwitcher.default)(state, action);

const existsSwitcher = {
    [EXISTS.SET]: (state, action) => action.payload,
    'default': (state, action) => state,
};

const existsReducer = (state, action) =>
    (existsSwitcher[action.type] || existsSwitcher.default)(state, action);

const runningSwitcher = {
    [RUNNING.SET]: (state, action) => action.payload,
    'default': (state, action) => state,
};

const runningReducer = (state, action) =>
    (runningSwitcher[action.type] || runningSwitcher.default)(state, action);

const timerSwitcher = {
    [TIMER.SET]: (state, action) => action.payload,
    [WORD.SET]: (state, action) => action.payload[1],
    'default': (state, action) => state,
};

const timerReducer = (state, action) =>
    (timerSwitcher[action.type] || timerSwitcher.default)(state, action);

export {
    wordReducer,
    triesReducer,
    charsReducer,
    existsReducer,
    runningReducer,
    timerReducer,
}