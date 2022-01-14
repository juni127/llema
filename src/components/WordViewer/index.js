import './index.css';
import React from 'react';

import WordRow from './src/WordRow';

const WordViewer = props => {

    return (
        <div class="column word-viewer">
            {[...Array(6)].map((_, i) => <WordRow key={i} index={i}/>)}
        </div>
    );
}

export default WordViewer;