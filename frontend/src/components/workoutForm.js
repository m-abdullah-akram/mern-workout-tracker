import { useState } from "react";
import { UseworkoutContext } from "../hooks/useWorkoutcontext";
const WorkForm = ()=>{
    const {dispatch} =UseworkoutContext();


    const [title , setTitle] = useState('');
    const [load , setLoad] = useState('');
    const [reps , setReps] = useState('');
    const [error , setError] = useState(null);
    const [emptyFields , setEmptyfields] = useState([])

    const handleSubmit =   async (e)=>{
        e.preventDefault(); // to prevent from refreshing page when submission
        const workout = {title , load , reps};

        const response = await fetch('/api/workouts' , {
            method : "POST" , 
            body : JSON.stringify(workout),
            headers : {
                'Content-Type' : "application/json"
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyfields(json.emptyFields)
        }
        if(response.ok){
            //resetting all states
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEmptyfields([])
            console.log("new Workout added : " , json);
            dispatch({type : "CREATE_WORKOUT" , payload: json}); 
        }

    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Exercise Title : </label>
            <input type="text" className = {emptyFields.includes('title') ? 'error' : ''}  onChange={(e)=>{ setTitle(e.target.value) }} value = {title}/>

            <label>Load (in KG) : </label>
            <input type="number" className = {emptyFields.includes('load') ? 'error' : ''} onChange={(e)=>{ setLoad(e.target.value) }} value = {load}/>

            <label>Reps : </label>
            <input type="text" className = {emptyFields.includes('reps') ? 'error' : ''} onChange={(e)=>{ setReps(e.target.value) }} value = {reps}/>

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkForm;