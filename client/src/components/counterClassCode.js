import React from "react";
import ClipboardItem from "./clipboardItem";

const CounterClassCode = () => {

    const code =
    `import React, { Component } from "react";

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
                <h1 className="display-4">Class Counter</h1>
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

export default Counter;`;

    return (
        <div>
            <button className="btn btn-link btn-lg" data-toggle="modal" data-target="#counterClassModalScrollable">
                Class Counter Code
            </button>
            <div className="modal fade" id="counterClassModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title lead" id="exampleModalLongTitle">Class Counter Code</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ClipboardItem
                                header="Copy Class Counter"
                                code={code}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterClassCode;