import React from "react";
import ClipboardItem from "./clipboardItem";

const UseCounterCode = () => {

    const code = 
    `import { useState } from "react";

const useCounter = initial => {
    // state
    const [value, setValue] = useState(initial);

    // function to increment count by 1
    const increment = () => setValue(value => value + 1);

    // function to decrement count by 1
    const decrement = () => setValue(value => value - 1);

    // function to clear count
    const clear = () => setValue(initial);

    // return an array
    return [value, increment, decrement, clear];

};

export default useCounter;`;

    return (
        <div>
            <button className="btn btn-link btn-lg" data-toggle="modal" data-target="#useCounterModalLong">
                useCounter Code
            </button>
            <div className="modal fade" id="useCounterModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title lead" id="exampleModalLongTitle">useCounter Code</h5>
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

export default UseCounterCode;