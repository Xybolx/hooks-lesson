import React, { Component } from "react";

class Counter extends Component {

        // state
        state = {
            count: 0
        };

        // function to increment count
        increment = () => {
            this.setState({ count: this.state.count + 1 });
        };

        // function to decrement count
        decrement = () => {
            this.setState({ count: this.state.count - 1 });
        };

        // function to clear count to 0
        clear = () => {
            this.setState({ count: 0 });
        };

    render() {
        return (
            <div>
                <h1 className="display-4">Hooks Counter</h1>
                <h2 className="lead">Count is: <span className="font-weight-bold text-danger">{this.state.count}</span></h2>
                <button
                    className="btn btn-danger"
                    onClick={this.decrement}>
                    - 1
                </button>
                <button
                    className="btn btn-success mx-1"
                    onClick={this.increment}>
                    + 1
                </button>
                <button
                    className="btn btn-outline-warning"
                    onClick={this.clear}>
                    CLR
                </button>
            </div>
        );
    };
};

export default Counter;