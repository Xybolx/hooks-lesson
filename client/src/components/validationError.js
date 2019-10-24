import React from 'react';

const ValidationError = props => {

    return (
        <div>
            <small className={props.className}>{props.children}</small>
        </div>
    );
};

export default ValidationError;