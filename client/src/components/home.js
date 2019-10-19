import React from "react";
import SpeechRecognition from "./speechRecognition";

const Home = () => {

    return (
        <div className="col-md-6 offset-md-3">
            <h1 className="display-4">Why Hooks?</h1>
            <SpeechRecognition />
            <ul className="list-group list-group-flush">
                <li className="list-group-item lead">A. We can write less code</li>
                <li className="list-group-item lead">B. We can avoid "this" keyword confusion</li>
                <li className="list-group-item lead">C. We can use state in functional components</li>
                <li className="list-group-item lead">D. We can reuse stateful logic with custom hooks</li>
            </ul>
        </div>
    );
};

export default Home;