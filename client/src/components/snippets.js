import React from "react";
import CounterClassCode from "./counterClassCode";
import CounterCode from "./counterCode";
import UseCounterCode from "./UseCounterCode";
import FormClassCode from "./formClassCode";
import FormCode from "./formCode";
import UseFormCode from "./UseFormCode";
import UseValidateCode from "./UseValidateCode";

const Snippets = () => {

    return (
        <div className="mb-3">
            <h1 className="display-4">Code Snippets</h1>
            <CounterClassCode />
            <CounterCode />
            <UseCounterCode />
            <FormClassCode />
            <FormCode />
            <UseFormCode />
            <UseValidateCode />
        </div>
    );
};

export default Snippets;