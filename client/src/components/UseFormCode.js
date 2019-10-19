import React from "react";
import ClipboardItem from "./clipboardItem";

const UseFormCode = () => {

    const code =
        `import { useState } from 'react';

const useForm = () => {

    // state
    const [values, setValues] = useState({});

    // handle change
    const handleChange = ev => {
        ev.persist();
        const { name, value } = ev.target;
        setState(values => ({ ...values, [name]: value }));
    };

    // handle clear form
    const handleClearForm = () => {
        setValues({});
    };

    return [values, handleChange, handleClearForm];

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
                            <h3 className="modal-title" id="exampleModalLongTitle">useForm Code</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ClipboardItem
                                header="Copy useForm Code To Clipboard"
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