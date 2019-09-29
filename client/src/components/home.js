import React, { useState } from "react";
import CounterClass from "./counterClass";
import CounterClassCode from "./counterClassCode";
import Counter from "./counter";
import CounterCode from "./counterCode";
import Form from "./form";
import FormCode from "./formCode";
import UseFormCode from "./UseFormCode";
import "../../node_modules/highlight.js/styles/dracula.css";

const Home = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);

    return (
        <div className="col-md-6 offset-md-3">
            <div className="logo">
                <img className="img-fluid" alt="React Logo" src="logo192.png" />
            </div>
            <h1>React Hooks Lesson</h1>
            <button onClick={toggle} className="btn btn-link btn-lg">
                Toggle Code
            </button>
            <CounterClass />
            <div style={isVisible ? { display: "block" } : { display: "none" }}>
                <CounterClassCode />
            </div>
            <Counter />
            <div style={isVisible ? { display: "block" } : { display: "none" }}>
                <CounterCode />
            </div>
            <Form />
            <div style={isVisible ? { display: "block" } : { display: "none" }}>
                <FormCode />
                <UseFormCode />
            </div>
        </div>
    );
};

export default Home;