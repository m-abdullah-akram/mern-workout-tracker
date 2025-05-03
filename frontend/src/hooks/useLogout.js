import { useAuthContext } from "./AuthContext";
import {UseworkoutContext} from "./useWorkoutcontext"
export const useLogout = ()=>{

    const {dispatch} = useAuthContext();
    const {dispatch : dispatchWorkouts } = UseworkoutContext();
    const logout = ()=>{
        // we do not need to talk with backend , just simply follow 2 Steps

        // 1 - remove user from local storage
        localStorage.removeItem('user');

        // 2- Dispatch Logout Action
        dispatch({type : 'LOGOUT'});

        dispatchWorkouts({type : "SET_WORKOUTS" , payload : null}) // clearing global workout states such that after logout user will unable to see workouts
    }

    return {logout}
}