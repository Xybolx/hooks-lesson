import React, { useState, useEffect } from "react";
import useSpeechRecognition from "./useSpeechRecognition";

const SpeechRecognition = () => {

    const [value, setValue] = useState("");

    const [date, setDate] = useState("");

    const [time, setTime] = useState("");

    const [speakingDate, setSpeakingDate] = useState(false);

    const [speakingTime, setSpeakingTime] = useState(false);

    const [speakingHooks, setSpeakingHooks] = useState(false);

    const onEnd = () => {
        console.log("end");
        setTime("");
        setDate("");
    };

    const onResult = result => {
        setValue(result);
        console.log(result);
        if (result === "what is the date") {
            const date = new Date(Date.now());
            setSpeakingDate(true);
            setTime("");
            setDate(`Today is ${date.toLocaleDateString()}`);
        } else if (result === "what is the time") {
            const time = new Date(Date.now());
            setSpeakingTime(true);
            setDate("");
            setTime(time.toLocaleTimeString());
        } else if (result.includes("computer why should we use hooks")) {
            setSpeakingHooks(true);
        }
    };

    const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd });

    useEffect(() => {
        if (speakingDate) {
            const date = new Date(Date.now());
            const speaker = new SpeechSynthesisUtterance(`today is ${date.toLocaleDateString()}`);
            speechSynthesis.speak(speaker);
            speaker.addEventListener("end", () => setSpeakingDate(false));
            return () => {
                speaker.removeEventListener("end", () => setSpeakingDate(false));
            };
        } else if (speakingTime) {
            const time = new Date(Date.now());
            const speaker = new SpeechSynthesisUtterance(`the time is ${time.toLocaleTimeString({ hour: "2-digit", minute: "2-digit", second: "2-digit" })}`);
            speechSynthesis.speak(speaker);
            speaker.addEventListener("end", () => setSpeakingTime(false));
            return () => {
                speaker.removeEventListener("end", () => setSpeakingTime(false));
            };
        } else if (speakingHooks) {
            const reasons = ["we can write less code", "we can avoid...this...key word confusion", "...we can use state in functional components", "...we can reuse stateful logic with custom hooks"];
            const speaker = new SpeechSynthesisUtterance(`some reasons to use hooks are:...A, ${reasons[0]} ...B, ${reasons[1]} ...C, ${reasons[2]} and...D, ${reasons[3]}`);
            speaker.rate = 0.6;
            speechSynthesis.speak(speaker);
            speaker.addEventListener("end", () => setSpeakingHooks(false));
            return () => {
                speaker.removeEventListener("end", () => setSpeakingHooks(false));
            };
        }
    }, [speakingDate, speakingTime, speakingHooks]);


    const toggle = listening
        ? stop
        : () => listen();

    const handleSubmit = ev => {
        ev.preventDefault();
    };

    return (
        <div>
            <h2>{date}</h2>
            <h2>{time}</h2>
            <div>
                <button type="button" className="btn btn-link btn-md" onClick={toggle}><i className="fas fa-microphone-alt" /> {listening ? 'Stop Listening' : 'Start Listening'}</button>
            </div>
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