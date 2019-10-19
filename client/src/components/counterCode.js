import React from "react";
import ClipboardItem from "./clipboardItem";

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

export default Counter;`;

    return (
        <div>
            <button className="btn btn-link btn-lg" data-toggle="modal" data-target="#hooksCounterModalLong">
                Hooks Counter Code
            </button>
            <div className="modal fade" id="hooksCounterModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title lead" id="exampleModalLongTitle">Hooks Counter Code</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ClipboardItem
                                code={code}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterCode;