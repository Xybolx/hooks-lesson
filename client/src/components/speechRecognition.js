import React, { useState, useEffect, useRef } from "react";
import useSpeechRecognition from "./useSpeechRecognition";
import useSpeechSynthesis from "./useSpeechSynthesis";

const SpeechRecognition = () => {

    const el0 = useRef();

    const el1 = useRef();

    const el2 = useRef();

    const el3 = useRef();

    const [value, setValue] = useState("");

    const [isSpeaking, setIsSpeaking] = useState(false);

    const [reasonArray, setReasonArray] = useState([]);

    const reasons = ["A., We can write less code", "B., We can avoid, this, keyword confusion", "C., We can use state in functional components", "D., We can reuse stateful logic with custom hooks"];

    useEffect(() => {
        setReasonArray(reasons);
        // eslint-disable-next-line
    }, []);

    const onEnd = () => {
        console.log("end");
    };

    const onResult = result => {
        setValue(result);
        console.log(result);
        if (result.includes("computer why should we use hooks")) {
            setIsSpeaking(true);
        }
    };

    const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd });

    useSpeechSynthesis(`some reasons to use hooks are:...${reasonArray[0]}, ...${reasonArray[1]}, ...${reasonArray[2]} and..., ...${reasonArray[3]}`, isSpeaking);

    const toggle = 
    listening
        ? () => {
            stop();
            setIsSpeaking(false);
        }
        : () => listen();

    const handleSubmit = ev => {
        ev.preventDefault();
    };

    return (
        <div>
            <div>
                <button type="button" className="btn btn-link btn-md" onClick={toggle}><i className="fas fa-microphone-alt" /> {listening ? 'Stop Listening' : 'Start Listening'}</button>
            </div>
            <ul>
                <li style={isSpeaking ? { display: "block" } : { display: "none" }} ref={el0} id="reason0" className="lead">A. We can write less code</li>
                <li style={isSpeaking ? { display: "block" } : { display: "none" }} ref={el1} id="reason1" className="lead">B. We can avoid "this" keyword confusion</li>
                <li style={isSpeaking ? { display: "block" } : { display: "none" }} ref={el2} id="reason2" className="lead">C. We can use state in functional components</li>
                <li style={isSpeaking ? { display: "block" } : { display: "none" }} ref={el3} id="reason3" className="lead">D. We can reuse stateful logic with custom hooks</li>
            </ul>
            <form style={{ display: "none" }} onSubmit={handleSubmit} id="speech-recognition-form">
                {!supported && (
                    <p>Oh no, it looks like your browser doesn&#39;t support Speech Recognition.</p>
                )}
                {supported && (
                    <>
                        <p>
                            {`Click 'Listen' and start speaking.
               SpeechRecognition will provide a transcript of what you are saying.`
                            }
                        </p>
                        <textarea
                            readOnly
                            id="transcript"
                            name="transcript"
                            placeholder="Waiting for you to speak..."
                            value={value}
                            rows={3}
                        />
                    </>
                )}
            </form>
        </div>
    );
};

export default SpeechRecognition;