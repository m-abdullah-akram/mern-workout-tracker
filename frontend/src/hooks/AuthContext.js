import { authContext } from "../context/authContext";

import {useContext} from 'react'

export const useAuthContext = ()=>{
    const context = useContext(authContext);

    if(!context){
        throw Error("useAuthContext must be used inside the AuthContextProvider");
    }
    return context;
}

// import { AuthContext } from "../context/AuthContext"
// import { useContext } from "react"

// export const useAuthContext = () => {
//   const context = useContext(AuthContext)

//   if(!context) {
//     throw Error('useAuthContext must be used inside an AuthContextProvider')
//   }

//   return context
// }