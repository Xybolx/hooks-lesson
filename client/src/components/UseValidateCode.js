import React from "react";
import ClipboardItem from "./clipboardItem";

const UseValidateCode = () => {

    const code =
    `// import useEffect and useState from react
// we don't need to import React because we aren't returning any jsx in this component
import { useEffect, useState } from "react";

// values comes from our form component via our useForm hook
const useValidate = values => {

    // state
    const [errors, setErrors] = useState({
        isValidEmail: false,
        isValidUsername: false,
        isValidPassword: false
    });


    // function to validate inputs
    // useEffect replaces componentDidMount/DidUpdate/WillUnmount and runs only when it's dependencies change
    useEffect(() => {
        // comparing our values to a regEx
        const emailMatch = /.+@.+\\....+/.test(values.email);
        const usernameMatch = /^(?=[0-9a-zA-Z#@$?]{3,}$).*/.test(values.username);
        const passwordMatch = /^(?=[0-9a-zA-Z#@$?]{6,}$).*/.test(values.password);

        // if the email input is not empty and it matches our regEx set isValidEmail to true
        if (values.email && emailMatch) {
            setErrors((errors => ({ ...errors, isValidEmail: true })));
            // if the email input does not match our regEx set isValidEmail to false
        } else if (!emailMatch) {
            setErrors((errors => ({ ...errors, isValidEmail: false })));
        }

        // if the username input is not empty and it matches our regEx set isValidUsername to true
        if (values.username && usernameMatch) {
            setErrors((errors => ({ ...errors, isValidUsername: true })));
            // if the username input does not match our regEx set isValidUsername to false
        } else if (!usernameMatch) {
            setErrors((errors => ({ ...errors, isValidUsername: false })));            
        }

        // if the password input is not empty and it matches our regEx set isValidPassword to true
        if (values.password && passwordMatch) {
            setErrors((errors => ({ ...errors, isValidPassword: true })));           
            // if the password input does not match our regEx set isValidPassword to false
        } else if (!passwordMatch) {
            setErrors((errors => ({ ...errors, isValidPassword: false })));                        
        }
        
        // useEffect's dependencies array
        // if we want it to run just once (like componentDidMount) we would pass an empty array here
    }, [values]);

    // function to set errors to false when we submit our form
    const resetValidate = () => {
        setErrors((errors => ({ ...errors, isValidEmail: false })));            
        setErrors((errors => ({ ...errors, isValidUsername: false })));            
        setErrors((errors => ({ ...errors, isValidPassword: false })));           
    };

    // returning the state of errors and our resetValidate function to the component we call this hook from
    return [errors, resetValidate];

};

export default useValidate;`;

    return (
        <div>
            <button className="btn btn-link btn-lg" data-toggle="modal" data-target="#useValidateModalLong">
                useValidate Code
            </button>
            <div className="modal fade" id="useValidateModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLongTitle">useValidate Code</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ClipboardItem
                                header="Copy To Clipboard"
                                code={code}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseValidateCode;