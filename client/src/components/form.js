import React from 'react';
import useForm from './useForm';
import useValidate from './useValidate';

const Form = () => {

    // state 
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
                        // sets the initial state of email input to an empty string
                        value={email || ""}
                        placeholder="type an email address..."
                        autoComplete="off"
                    />
                    <div>
                        <small
                            // email is the value of the email input
                            // isValidEmail is returned by useValidate
                            className={email && isValidEmail ? "text-success" : email && !isValidEmail ? "text-danger" : "text-dark"}>
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
                        <small
                            // username is the value of the username input
                            // isValidUsername is returned by useValidate
                            className={username && isValidUsername ? "text-success" : username && !isValidUsername ? "text-danger" : "text-dark"}>
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
                        // sets the initial state of password input to an empty string 
                        value={password || ""}
                        placeholder="type a password..."
                        autoComplete="current-password"
                    />
                    <div>
                        <small
                            // password is the value of the password input
                            // isValidPassword is returned by useValidate hook 
                            className={password && isValidPassword ? "text-success" : password && !isValidPassword ? "text-danger" : "text-dark"}>
                            {password && isValidPassword ? "Valid password!" : password && !isValidPassword ? "Password must be at least 6 characters!" : ""}
                        </small>
                    </div>
                </div>
                <div className="text-center col-md-6 offset-md-3">
                    <button
                        className="btn btn-success "
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