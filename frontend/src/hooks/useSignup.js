import { useState } from "react";

import { useAuthContext } from "./AuthContext";

export const useSignup = ()=>{
    const[error , setError] = useState(null);
    const [isLoading , setisLoading] = useState(null);
    const {dispatch }= useAuthContext()

    const signup = async (email , password) => {
        setisLoading(true);
        setError(null);

        const response  = await fetch ('/api/user/signup' , {
            method : "POST",
            headers : {'Content-Type' : "application/json"}, // the type of data we are sending with request (json)
            body: JSON.stringify({email , password}) // the data itself is in the body
        }) 

        const json = await response.json();

        if (!response.ok) {
            setisLoading(false);
            setError(json.error)
        }

        if (response.ok) {
            // save the user to the local Storage , so that when he reOpen the browser then token will there for that user , he will stay logged in

            localStorage.setItem('user' , JSON.stringify(json));

            // update the auth context

            dispatch({type : 'LOGIN' , payload : json})
            setisLoading(false);

        }

    }

    return {signup , isLoading , error};
}