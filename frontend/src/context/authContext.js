import {createContext , useReducer , useEffect } from "react"

export const authContext = createContext();

export const authReducer = (state , action)=>{
    switch (action.type)  // we will set this action type while calling this function
    {
        case 'LOGIN':
            return {user:action.payload}
            
        case 'LOGOUT':
            return {user:null}
        default:
            return state  // return what it already (previous state)
    }
} 


export const AuthContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(authReducer , {
        user : null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user')); // parse the json into object format

        if (user) {
            dispatch({type : "LOGIN" , payload : user})
        }
    } ,[])
    console.log("Authentication Context STATE  :   ", state);

    return (
        <authContext.Provider value={{...state , dispatch}}>
            { children }
        </authContext.Provider>
    )
}