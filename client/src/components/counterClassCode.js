import React from "react";
import Highlight from "react-highlight";

const CounterClassCode = () => {

    const code =
        `import React, { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = () => {
            this.setState({ count: this.state.count + 1 });
        };

        this.decrement = () => {
            this.setState({ count: this.state.count - 1 });
        };

        this.clear = () => {
            this.setState({ count: 0 });
        };
    };
    render() {
        return (
            <div className="section">
                <h1>Class Counter</h1>
                <h2>Count is: <span className="font-weight-bold">{this.state.count}</span></h2>
                <div className="mb-2">
                    <button
                        className="btn btn-success btn-md"
                        onClick={this.increment}>
                        + 1
                </button>
                    <button
                        className="btn btn-danger btn-md mx-1"
                        onClick={this.decrement}>
                        - 1
                </button>
                    <button
                        className="btn btn-outline-warning btn-md"
                        onClick={this.clear}>
                        CLR
                </button>
                </div>
            </div>
        );
    };
};

export default CounterClass;`

    return (
        <Highlight className="javascript text-left"><pre>{code}</pre></Highlight>
    );
};

export default CounterClassCode;