import { WorkoutsContext } from "../context/workoutContext";

import {useContext} from 'react'

export const UseworkoutContext = ()=>{
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error("UseWorkoutContext must be used inside the WorkoutContextProvider");
    }
    return context;
}