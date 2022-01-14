import React from 'react';

import Key from "./Key";

const KeyRow = ({row}) => {
    return (
        <div class="d-flex flex-row justify-content-center keyboard-row">
            {row.map((char, key) => <Key char={char} key={key}/>)}
        </div>
    );
};

export default KeyRow;