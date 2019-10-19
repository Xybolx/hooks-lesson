import { useState } from "react";

const useSetState = (initialState = {}) => {
    const [state, set] = useState(initialState);
    const setState = patch => {
        Object.assign(state, patch);
        set(state);
    };

    return [state, setState];
};

export default useSetState;