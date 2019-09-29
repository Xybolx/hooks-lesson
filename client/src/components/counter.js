import React, { useState } from "react";

const Counter = () => {

    // state
    const [count, setCount] = useState(0);

    // function to increment count by 1
    const increment = () => {
        setCount(count => count + 1);
    };

    // function to decrement count by 1
    const decrement = () => {
        setCount(count => count - 1);
    };

    // function to clear count to 0
    const clear = () => {
        setCount(0);
    };

    return (
        <div className="section">
            <h1>Hooks Counter</h1>
            <h2>Count is: <span className="font-weight-bold">{count}</span></h2>
            <div className="mb-2">
                <button
                    className="btn btn-success btn-md"
                    onClick={increment}>
                    + 1
                </button>
                <button
                    className="btn btn-danger btn-md mx-1"
                    onClick={decrement}>
                    - 1
                </button>
                <button
                    className="btn btn-outline-warning btn-md"
                    onClick={clear}>
                    CLR
                </button>
            </div>
        </div>
    );
};

export default Counter;