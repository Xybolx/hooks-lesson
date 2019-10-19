import React from "react";
import ClipboardItem from "./clipboardItem";

const UseFormCode = () => {

    const code =
        `import { useState } from 'react';

const useForm = () => {

    // state
    const [state, setState] = useState({});

    // handle change
    const handleChange = ev => {
        ev.persist();
        const { name, value } = ev.target;
        setState(state => ({ ...state, [name]: value }));
    };

    // handle clear form
    const handleClearForm = () => {
        setState({});
    };

    return [state, handleChange, handleClearForm];

};

export default useForm;`

    return (
        <div>
            <button className="btn btn-link btn-lg" data-toggle="modal" data-target="#useFormModalLong">
                useForm Code
            </button>
            <div className="modal fade" id="useFormModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title lead" id="exampleModalLongTitle">useForm Code</h5>
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

export default UseFormCode;