import React from 'react';
import ValidationError from './validationError';
import useForm from './useForm';
import useValidate from './useValidate';

const Form = () => {

    // state 
    const [values, handleChange, handleClearForm] = useForm();
    const [errors, resetValidate] = useValidate(values);

    // de-structure values object
    const { email, username, password } = values;

    // de-structure errors object
    const { isValidEmail, isValidUsername, isValidPassword } = errors;

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
                        // sets the initial state of email input to an empty string
                        value={email || ""}
                        placeholder="type an email address..."
                        autoComplete="off"
                    />
                    <ValidationError
                        // email is the value of the email input
                        // isValidEmail is returned by useValidate via the errors object
                        className={email && isValidEmail ? "text-success" : email && !isValidEmail ? "text-danger" : "text-dark"}>
                        {email && isValidEmail ? "Valid email!" : email && !isValidEmail ? "Must be a valid email address!" : ""}
                    </ValidationError>
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
                    <ValidationError
                        // username is the value of the username input
                        // isValidUsername is returned by useValidate via the errors object
                        className={username && isValidUsername ? "text-success" : username && !isValidUsername ? "text-danger" : "text-dark"}>
                        {username && isValidUsername ? "Valid username!" : username && !isValidUsername ? "Username must be at least 3 characters!" : ""}
                    </ValidationError>
                </div>
                <label className="lead">Password</label>
                <div className="form-group">
                    <input
                        required
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        // sets the initial state of password input to an empty string 
                        value={password || ""}
                        placeholder="type a password..."
                        autoComplete="current-password"
                    />
                    <ValidationError
                        // password is the value of the password input
                        // isValidPassword is returned by useValidate via the errors object 
                        className={password && isValidPassword ? "text-success" : password && !isValidPassword ? "text-danger" : "text-dark"}>
                        {password && isValidPassword ? "Valid password!" : password && !isValidPassword ? "Password must be at least 6 characters!" : ""}
                    </ValidationError>
                </div>
                <div className="text-center col-md-6 offset-md-3 mb-5">
                    <button
                        className="btn btn-success mb-5"
                        // submit button is disabled while isValidEmail or isValidUsername or isValidPassword is false
                        disabled={!isValidEmail || !isValidUsername || !isValidPassword}
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;