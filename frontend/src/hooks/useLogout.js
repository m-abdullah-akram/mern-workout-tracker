import { useAuthContext } from "./AuthContext";

export const useLogout = ()=>{

    const {dispatch} = useAuthContext();
    const logout = ()=>{
        // we do not need to talk with backend , just simply follow 2 Steps

        // 1 - remove user from local storage
        localStorage.removeItem('user');

        // 2- Dispatch Logout Action
        dispatch({type : 'LOGOUT'});
    }

    return {logout}
}