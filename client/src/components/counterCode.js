import React from "react";
import Highlight from "react-highlight";

const CounterCode = () => {

    const code =
        `import React, { useState } from "react";

const Counter = () => {

    // state
    const [count, setCount] = useState(0);

    // function to increment count
    const increment = () => {
        setCount(count => count + 1);
    };

    // function to decrement count
    const decrement = () => {
        setCount(count => count - 1);
    };

    // function to clear count to 0
    const clear = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>Counter</h2>
            <div>
                Count is: <span className="font-weight-bold">{count}</span>
            </div>
            <div>
                <button
                    className="btn btn-link btn-sm"
                    onClick={increment}>
                    Increment
                </button>
                <button
                    className="btn btn-link btn-sm"
                    onClick={decrement}>
                    Decrement
                </button>
                <button
                    className="btn btn-link btn-sm"
                    onClick={clear}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;`

    return (
        <Highlight className="javascript text-left"><pre>{code}</pre></Highlight>
    );
};

export default CounterCode;