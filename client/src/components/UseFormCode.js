import React from "react";
import Highlight from "react-highlight";

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
        setState(state => ({ ...state, [name]: value }))
    };

    // handle clear form
    const handleClearForm = () => {
        setState({});
    };

    return [state, handleChange, handleClearForm];

};

export default useForm;`

    return (
        <Highlight className="javascript text-left"><pre>{code}</pre></Highlight>
    );
};

export default UseFormCode;