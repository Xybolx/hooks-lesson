import { useState, useRef, useEffect } from "react";
import useSetState from "./useSetState";

const useSpeechSynthesis = text => {
    
    const [state, setState] = useState({
        isPlaying: false,
    });

    const uterranceRef = useRef(null);

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => setState({ isPlaying: true });
        utterance.onresume = () => setState({ isPlaying: true });
        utterance.onend = () => setState({ isPlaying: false });
        utterance.onpause = () => setState({ isPlaying: false });
        uterranceRef.current = utterance;
        window.speechSynthesis.speak(uterranceRef.current);
    }, [text]);

    return state;
};

export default useSpeechSynthesis;