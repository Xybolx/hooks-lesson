import React from "react";
import ClipboardItem from "./clipboardItem";

const FormCode = () => {

    const code =
        `import React from 'react';
import useForm from './useForm';
import useValidate from './useValidate';

const Form = () => {

    // state // 
    const [values, handleChange, handleClearForm] = useForm();
    const [isValidEmail, isValidUsername, isValidPassword, resetValidate] = useValidate(values);

    // de-structure values object
    const { email, username, password } = values;

    // handleSubmit
    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(values);
        // returned by useValidate
        resetValidate();
        // returned by useForm
        handleClearForm();
    };

    return (
        <div>
            <h1 className="display-4">Hooks Form</h1>
            <form className="text-left col-md-6 offset-md-3" onSubmit={handleSubmit}>
                <label className="lead">Email</label>
                <div className="form-group">
                    <input
                        required
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email || ""}
                        placeholder="type an email address..."
                        autoComplete="off"
                    />
                    <div>
                        <small className={email && isValidEmail ? "text-success" : email && !isValidEmail ? "text-danger" : "text-dark"}>
                            {email && isValidEmail ? "Valid email!" : email && !isValidEmail ? "Must be a valid email address!" : ""}
                        </small>
                    </div>
                </div>
                <label className="lead">Username</label>
                <div className="form-group">
                    <input
                        required
                        className="form-control"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        // sets the initial state of username input to an empty string
                        value={username || ""}
                        placeholder="type a username..."
                        autoComplete="off"
                    />
                    <div>
                        <small className={username && isValidUsername ? "text-success" : username && !isValidUsername ? "text-danger" : "text-dark"}>
                            {username && isValidUsername ? "Valid username!" : username && !isValidUsername ? "Username must be at least 3 characters!" : ""}
                        </small>
                    </div>
                </div>
                <label className="lead">Password</label>
                <div className="form-group">
                    <input
                        required
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password || ""}
                        placeholder="type a password..."
                        autoComplete="current-password"
                    />
                    <div>
                        <small className={password && isValidPassword ? "text-success" : password && !isValidPassword ? "text-danger" : "text-dark"}>
                            {password && isValidPassword ? "Valid password!" : password && !isValidPassword ? "Password must be at least 6 characters!" : ""}
                        </small>
                    </div>
                </div>
                <div className="text-center col-md-6 offset-md-3">
                    <button
                        className="btn btn-success"
                        disabled={!isValidEmail || !isValidUsername || !isValidPassword}
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;`;

    return (
        <div>
            <button className="btn btn-link btn-lg" data-toggle="modal" data-target="#hooksFormModalLong">
                Hooks Form Code
            </button>
            <div className="modal fade" id="hooksFormModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title lead" id="exampleModalLongTitle">Hooks Form Code</h5>
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

export default FormCode;