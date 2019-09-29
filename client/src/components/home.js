import React from "react";
import CounterClass from "./counterClass";
import CounterClassCode from "./counterClassCode";
import Counter from "./counter";
import CounterCode from "./counterCode";
import Form from "./form";
import FormCode from "./formCode";
import UseFormCode from "./UseFormCode";
import "../../node_modules/highlight.js/styles/dracula.css";

const Home = () => {

    return (
        <div className="col-md-6 offset-md-3">
            <div className="container">
                <img className="img-fluid" alt="React Logo" src="logo192.png" />
            </div>
            <h1>React Hooks Lesson</h1>
            <CounterClass />
            <CounterClassCode />
            <Counter />
            <CounterCode />
            <Form />
            <FormCode />
            <UseFormCode />
        </div>
    );
};

export default Home;