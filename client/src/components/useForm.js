// import useState from react
// we don't import React because we aren't returning any jsx in this component 
import { useState } from 'react';

const useForm = () => {

    // initializing state as an empty object
    const [values, setValues] = useState({});

    // handle change
    const handleChange = ev => {
        ev.persist();
        // de-structure ev.target.name and ev.target.value
        const { name, value } = ev.target;
        // passing in previous state (values)
        setValues(values =>
            ({
            // making a new values object
            ...values,
            // setting the state of input names when their value changes 
            [name]: value 
        }));
    };

    // function to clear form when we submit
    const handleClearForm = () => {
        // sets values back to empty object
        setValues({});
    };
 
    // returning the state of the values object, our handleChange function, and our handleClearForm function to the component we call this hook from
    return [values, handleChange, handleClearForm];

};

export default useForm;