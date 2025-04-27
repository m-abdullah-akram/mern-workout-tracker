// import { useEffect ,useState } from "react";  // as we are not using the useState anymore thus

import {useEffect} from 'react'
import { UseworkoutContext } from "../hooks/useWorkoutcontext";

//importing component , the one that displays the workout details.
import WorkoutDetails from '../components/workoutDetails'

import WorkForm from '../components/workoutForm'
const Home = ()=>{
    // const [workouts , setWorkouts] = useState(null); using local , but know we will set workout as Global
    const {workouts , dispatch} =UseworkoutContext();

    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")
            const json = await response.json();

            if(response.ok){
                // setWorkouts(json); //instead of this we know do it in the following way:
                dispatch({type : "SET_WORKOUTS" , payload: json}); 
            }
        }
        fetchWorkouts();
    },[dispatch])
    return (
    <div className="home">
        <div className="workouts">
            {workouts && workouts.map((workout)=>(
                // <p key={workout._id}>{workout.title}</p>
                <WorkoutDetails key={workout._id} workout = {workout} />
            ))}
        </div>
        <WorkForm />
    </div>)
}

export default Home;