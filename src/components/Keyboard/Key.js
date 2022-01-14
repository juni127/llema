import React from "react";
import { connect } from "react-redux";

import {
    addTries,
} from "../../redux/actions";

const Key = ({char, key, addTries, keyColor, running}) => {
    return (
        <button class={`key ${keyColor[char]}`} onClick={() => running && addTries(char)}>
            {char}
        </button>
    );
};

const mapStateToProps = state => ({
    keyColor: state.chars,
    running: state.running,
});

const mapDispatchToProps = {
    addTries: char => addTries(char),
};

export default connect(mapStateToProps, mapDispatchToProps)(Key);