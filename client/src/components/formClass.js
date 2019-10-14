import React, { Component } from "react";

class FormClass extends Component {

        // state
        state = {
            username: "",
            password: "",
            isValidUsername: false,
            isValidPassword: false
        };

        // function to validate our inputs
        validate = () => {

            // comparing our inputs to a regEx
            const usernameMatch = /^(?=[0-9a-zA-Z#@$?]{3,}$).*/.test(this.state.username);
            const passwordMatch = /^(?=[0-9a-zA-Z#@$?]{6,}$).*/.test(this.state.password);

            // if username input matches our regEx set isValidUsername to true
            if (usernameMatch) {
                this.setState({ ...this.state.isValidUsername, isValidUsername: true });
                // if username input doesn't match our regEx set isValidUsername to false
            } else if (!usernameMatch) {
                this.setState({ ...this.state.isValidUsername, isValidUsername: false });
            }

            // if password input matches our regEx set isValidPassword to true
            if (passwordMatch) {
                this.setState({ ...this.state.isValidPassword, isValidPassword: true });
                // if password input doesn't match our regEx set isValidPassword to false
            } else if (!passwordMatch) {
                this.setState({ ...this.state.isValidPassword, isValidPassword: false });
            }
        };

        // handleChange
        handleChange = ev => {
            // de-structure ev.target.name/ev.target.value
            const { name, value } = ev.target;
            // this.setState can take a second argument so we run this.validate each time it is called
            this.setState({ [name]: value }, this.validate);
        };

        // handleSubmit
        handleSubmit = ev => {
            ev.preventDefault();
            console.log(this.state.username, this.state.password);
            // clear the form and reset validation
            this.setState({
                username: "",
                password: "",
                isValidUsername: false,
                isValidPassword: false
            });
        };

    render() {
        return (
            <div>
                <h1 className="display-4">Class Form</h1>
                <form className="text-left col-md-6 offset-md-3" onSubmit={this.handleSubmit}>
                    <label className="lead">Username</label>
                    <div className="form-group">
                        <input
                            required
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            placeholder="type a username..."
                            autoComplete="off"
                        />
                        <div>
                            <small
                                className={this.state.username && this.state.isValidUsername ? "text-success" : this.state.username && !this.state.isValidUsername ? "text-danger" : "text-dark"}>
                                {this.state.username && this.state.isValidUsername ? "Valid username!" : this.state.username && !this.state.isValidUsername ? "Username must be at least 3 characters!" : ""}
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
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="type a password..."
                            autoComplete="current-password"
                        />
                        <div>
                            <small
                                className={this.state.password && this.state.isValidPassword ? "text-success" : this.state.password && !this.state.isValidPassword ? "text-danger" : "text-dark"}>
                                {this.state.password && this.state.isValidPassword ? "Valid password!" : this.state.password && !this.state.isValidPassword ? "Password must be at least 6 characters!" : ""}
                            </small>
                        </div>
                    </div>
                    <div className="text-center col-md-6 offset-md-3">
                        <button
                            className="btn btn-success"
                            // submit button is disabled while either this.state.isValidUsername or this.state.isValidPassword is false
                            disabled={!this.state.isValidUsername || !this.state.isValidPassword}
                            type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default FormClass;