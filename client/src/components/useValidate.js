// import useEffect and useState from react
// we don't need to import React because we aren't returning any jsx in this component
import { useEffect, useState } from "react";

// values comes from our form component via our useForm hook
const useValidate = values => {

    // state
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    // function to validate inputs
    // useEffect replaces componentDidMount/DidUpdate/WillUnmount and runs only when it's dependencies change
    useEffect(() => {
        // comparing our values to a regEx
        const usernameMatch = /^(?=[0-9a-zA-Z#@$?]{3,}$).*/.test(values.username);
        const passwordMatch = /^(?=[0-9a-zA-Z#@$?]{6,}$).*/.test(values.password);

        // if the username input is not empty and it matches our regEx set isValidUsername to true
        if (values.username && usernameMatch) {
            setIsValidUsername(true);
            // if the username input does not match our regEx set isValidUsername to false
        } else if (!usernameMatch) {
            setIsValidUsername(false);
        }

        // if the password input is not empty and it matches our regEx set isValidPassword to true
        if (values.password && passwordMatch) {
            setIsValidPassword(true);
            // if the password input does not match our regEx set isValidPassword to false
        } else if (!passwordMatch) {
            setIsValidPassword(false);
        }
        
        // useEffect's dependencies array
        // if we want it to run just once (like componentDidMount) we would pass an empty array here
    }, [values.username, values.password]);

    // function to set isValidUsername/Password to false when we submit our form
    const resetValidate = () => {
        setIsValidUsername(false);
        setIsValidPassword(false);
    };

    // returning the state of isValidUsername, isValidPassword, and our resetValidate function to the component we call this hook from
    return [isValidUsername, isValidPassword, resetValidate];

};

export default useValidate;