import './index.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
    setTimer,
} from '../../redux/actions';

const Timer = ({ time, setTimer }) => {

    useEffect(() => {
        setTimeout(() => {
            setTimer(time - 1);
        }, 1000);
    }, [time]);

    return (
        <div className="timer">
            <h1>{time}s</h1>
        </div>
    );
};

const mapStateToProps = (state) => ({
    time: state.timer,
});

const mapDispatchToProps = {
    setTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);