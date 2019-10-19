import React from "react";

const ReasonList = props => {

    return (
        <ul className="list-group text-left">
            {props.children}
        </ul>
    );
};

export default ReasonList;