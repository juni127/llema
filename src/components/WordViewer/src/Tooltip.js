import React, { useEffect, useState } from "react";
import { 
    connect
} from 'react-redux';

import {
    setExists,
} from '../../../redux/actions';

const Tooltip = ({ text, active, setExists }) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if(active) {
            setShow(true);
            setTimeout(() => {
                setExists(true);
                setShow(false);
            }, 3000);
        }
    }, [active]);
    
    return show?(
        <div className="c-tooltip">
            <span className="c-tooltip-text">{text}</span>
        </div>
    ):<></>;
};

const mapDispatchToProps = {
    setExists,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Tooltip);