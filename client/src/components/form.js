import React from 'react';
import useForm from './useForm';

const Form = () => {

    const [values, handleChange, handleClearForm] = useForm();

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(values.username);
        console.log(values.number);
        handleClearForm();
    };

    return (
        <div className="section">
            <h1>Username Form</h1>
            <h2>The User Is: <span className="font-weight-bold">{values.username}</span></h2>
            <h2>The Number Is: <span className="font-weight-bold">{values.number}</span></h2>           
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username || ""}
                    placeholder="type a username..."
                />
                <input
                    required
                    type="number"
                    name="number"
                    onChange={handleChange}
                    value={values.number || 0}
                />
                <button className="btn btn-link btn-lg" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
