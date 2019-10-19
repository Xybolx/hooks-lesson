import React, { useState } from "react";
import useCounter from "./useCounter";

const Counter = () => {

    // state
    const [count, increment, decrement, clear] = useCounter(0);

    return (
        <div>
            <h1 className="display-4">Hooks Counter</h1>
            <h2 className="lead">Count is: <span className="font-weight-bold text-danger">{count}</span></h2>
            <button
                className="btn btn-danger"
                onClick={decrement}>
                - 1
                </button>
            <button
                className="btn btn-success mx-1"
                onClick={increment}>
                + 1
                </button>
            <button
                className="btn btn-outline-warning"
                onClick={clear}>
                CLR
                </button>
        </div>
    );
};

export default Counter;