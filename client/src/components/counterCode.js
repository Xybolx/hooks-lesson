import React from "react";
import ClipboardItem from "./clipboardItem";

const CounterCode = () => {

    const code =
    `import React from "react";
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
                            <h3 className="modal-title" id="exampleModalLongTitle">Hooks Counter</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ClipboardItem
                                header="Copy To Clipboard"
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