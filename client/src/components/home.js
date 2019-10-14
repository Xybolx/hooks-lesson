import React from "react";
import "../../node_modules/highlight.js/styles/dracula.css";

const Home = () => {

    return (
        <div className="col-md-6 offset-md-3">
            <h1 className="display-4">Why Hooks?</h1>
            <ul className="list-group text-left">
                <li className="lead">Write less code</li>
                <li className="lead">Avoid "this" keyword confusion</li>
                <li className="lead">Use state in functional components</li>
                <li className="lead">Re-use stateful logic with custom hooks</li>
            </ul>
        </div>
    );
};

export default Home;